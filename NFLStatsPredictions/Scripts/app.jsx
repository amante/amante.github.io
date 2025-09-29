const { useMemo, useState, useEffect } = React;
const { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } = Recharts;

/** ------------------------------------------------------------------
 *  MOCKS y HOOKS para integrar API real más adelante
 *  - Reemplaza las funciones getPlayerSurfaceAverages y getDefenseAllow
 *    por fetch() a tu API cuando la tengas.
 * ------------------------------------------------------------------ */
const PLAYERS = [
  { id: "rb_a", name: "RB A", kind: "rushing", avgGrass: 98, avgTurf: 104, minY: 56, maxY: 145 },
  { id: "wr_b", name: "WR B", kind: "receiving", avgGrass: 65, avgTurf: 70,  minY: 20, maxY: 140 },
  { id: "te_c", name: "TE C", kind: "receiving", avgGrass: 45, avgTurf: 42,  minY: 10, maxY: 95  },
];

const OPPONENTS = [
  { id: "soft", name: "Defensa suave", allowRushing: 130, allowReceiving: 250, leagueMeanRushing: 115, leagueMeanReceiving: 230 },
  { id: "avg",  name: "Defensa promedio", allowRushing: 115, allowReceiving: 235, leagueMeanRushing: 115, leagueMeanReceiving: 230 },
  { id: "hard", name: "Defensa dura", allowRushing: 95,  allowReceiving: 220, leagueMeanRushing: 115, leagueMeanReceiving: 230 },
];

/** Simula llamada a API para promedios por superficie del jugador */
async function getPlayerSurfaceAverages(playerId) {
  // TODO: Reemplazar con tu API real, por ejemplo:
  // const res = await fetch(`https://tuapi.com/player-surfaces?playerId=${playerId}`);
  // const data = await res.json();
  // return { avgGrass: data.avgGrass, avgTurf: data.avgTurf, minY: data.min, maxY: data.max, kind: data.kind };
  const found = PLAYERS.find(p => p.id === playerId);
  await new Promise(r => setTimeout(r, 200)); // simula red
  if (!found) throw new Error("Jugador no encontrado");
  return { avgGrass: found.avgGrass, avgTurf: found.avgTurf, minY: found.minY, maxY: found.maxY, kind: found.kind };
}

/** Simula llamada a API para yardas permitidas por la defensa (rushing/receiving) */
async function getDefenseAllow(opponentId, kind) {
  // TODO: Reemplazar con tu API real, por ejemplo:
  // const res = await fetch(`https://tuapi.com/defense-allow?teamId=${opponentId}&kind=${kind}`);
  // const d = await res.json();
  // return { defenseAllow: d.allow, leagueMean: d.leagueMean };
  const o = OPPONENTS.find(x => x.id === opponentId);
  await new Promise(r => setTimeout(r, 150)); // simula red
  if (!o) throw new Error("Rival no encontrado");
  const defenseAllow = (kind === "rushing") ? o.allowRushing : o.allowReceiving;
  const leagueMean = (kind === "rushing") ? o.leagueMeanRushing : o.leagueMeanReceiving;
  return { defenseAllow, leagueMean };
}

// ----------------------------- Utils (math) ----------------------------- //
const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));
function erf(x){const a1=0.254829592,a2=-0.284496736,a3=1.421413741,a4=-1.453152027,a5=1.061405429,p=0.3275911,sign=x<0?-1:1,t=1/(1+p*Math.abs(x));const y=1-(((((a5*t+a4)*t+a3)*t+a2)*t+a1)*t*Math.exp(-x*x));return sign*y}
const phi = (z) => 0.5*(1+erf(z/Math.SQRT2));
const probGE = (target, mean, sd) => 1 - phi((target-mean)/sd);

// ----------------------------- Domain model ----------------------------- //
function opponentAdjustment(defenseAllow, leagueMean=115, elasticity=0.5){
  const ratio = clamp(defenseAllow/(leagueMean||1), 0.2, 5.0);
  return Math.pow(ratio, elasticity);
}
function tempAdjustment(tempC, { optimal=18, perDegPct=0.005, floor=0.85, cap=1.05, kind="rushing"}={}){
  let base = 1 - perDegPct*Math.abs(tempC - optimal);
  base = clamp(base, floor, cap);
  if (kind === "rushing" && tempC <= 10) {
    const coldBoost = 1 + Math.min(0.07, (10-tempC)*0.01);
    base *= coldBoost;
  }
  return clamp(base, 0.75, 1.15);
}
const timeAdjustment = (h) => (h<=11?0.99:(h>=20?0.98:1));
const estimateSD = (minY, maxY) => Math.max(1, (maxY - minY)/4);
const formatPct = (x, d=1) => `${(x*100).toFixed(d)}%`;

// ----------------------------- App Component ----------------------------- //
function App(){
  // Selección de jugador y rival
  const [playerId, setPlayerId] = useState(PLAYERS[0].id);
  const [opponentId, setOpponentId] = useState(OPPONENTS[0].id);
  const [autoFetch, setAutoFetch] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Tipo de yardas (podemos auto-ajustarlo según jugador)
  const [kind, setKind] = useState(PLAYERS[0].kind); // rushing | receiving

  // Superficie, métricas del jugador y rango (para σ)
  const [surface, setSurface] = useState("grass");
  const [avgGrass, setAvgGrass] = useState(PLAYERS[0].avgGrass);
  const [avgTurf, setAvgTurf] = useState(PLAYERS[0].avgTurf);
  const [minY, setMinY] = useState(PLAYERS[0].minY);
  const [maxY, setMaxY] = useState(PLAYERS[0].maxY);

  // Defensa rival y promedio liga
  const [defenseAllow, setDefenseAllow] = useState(OPPONENTS[0].allowRushing);
  const [leagueMean, setLeagueMean] = useState(OPPONENTS[0].leagueMeanRushing);
  const [elasticity, setElasticity] = useState(0.5);

  // Clima/horario
  const [tempC, setTempC] = useState(20);
  const [hourLocal, setHourLocal] = useState(16);

  // Umbrales y grilla
  const [thresholdsText, setThresholdsText] = useState("50,75,100,125");
  const [gridMin, setGridMin] = useState(25);
  const [gridMax, setGridMax] = useState(175);
  const [gridStep, setGridStep] = useState(5);

  // Hook para autocompletar datos cuando cambie jugador/rival/superficie/tipo
  useEffect(() => {
    if (!autoFetch) return;
    let alive = true;
    (async () => {
      try {
        setLoading(true); setError(null);
        const [p, d] = await Promise.all([
          getPlayerSurfaceAverages(playerId),
          getDefenseAllow(opponentId, kind),
        ]);
        if (!alive) return;
        setKind(p.kind || kind); // si la API define kind para el jugador
        setAvgGrass(p.avgGrass); setAvgTurf(p.avgTurf);
        setMinY(p.minY); setMaxY(p.maxY);
        setDefenseAllow(d.defenseAllow);
        setLeagueMean(d.leagueMean);
      } catch (e) {
        if (!alive) return;
        setError(e.message || String(e));
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, [playerId, opponentId, kind, autoFetch]);

  function handleRefresh() {
    // fuerza el efecto aunque autoFetch=false (llamada manual)
    const prev = autoFetch;
    setAutoFetch(true);
    setTimeout(()=> setAutoFetch(prev), 0);
  }

  // Media, desviación y datos derivados
  const muSurface = surface === "grass" ? Number(avgGrass) : Number(avgTurf);
  const adjDefense = useMemo(()=> opponentAdjustment(Number(defenseAllow), Number(leagueMean), Number(elasticity)), [defenseAllow, leagueMean, elasticity]);
  const adjTemp = useMemo(()=> tempAdjustment(Number(tempC), { kind }), [tempC, kind]);
  const adjTime = useMemo(()=> timeAdjustment(Number(hourLocal)), [hourLocal]);
  const mu = useMemo(()=> muSurface * adjDefense * adjTemp * adjTime, [muSurface, adjDefense, adjTemp, adjTime]);
  const sd = useMemo(()=> estimateSD(Number(minY), Number(maxY)), [minY, maxY]);

  const thresholds = useMemo(()=>{
    const nums = thresholdsText.split(",").map(s=>Number(s.trim())).filter(x=>!Number.isNaN(x)).sort((a,b)=>a-b);
    return nums.length ? nums : [50,75,100,125];
  }, [thresholdsText]);

  const tableData = useMemo(()=> thresholds.map(t=>({ threshold:t, probability: probGE(t, mu, sd) })), [thresholds, mu, sd]);

  const chartData = useMemo(()=>{
    const lo=Number(gridMin), hi=Number(gridMax), step=Math.max(1, Number(gridStep));
    const pts=[];
    for(let x=lo;x<=hi;x+=step){ pts.push({ x, p: probGE(x, mu, sd) }); }
    return pts;
  }, [gridMin, gridMax, gridStep, mu, sd]);

  const summary = [
    {label:"Jugador", value: PLAYERS.find(p=>p.id===playerId)?.name || playerId},
    {label:"Rival", value: OPPONENTS.find(o=>o.id===opponentId)?.name || opponentId},
    {label:"Superficie", value: surface==="grass"?"Pasto":"Turf"},
    {label:"Tipo de yardas", value: kind==="rushing"?"Carrera":"Recepción"},
    {label:"μ (media estimada)", value: `${mu.toFixed(2)} yd`},
    {label:"σ (desvío est.)", value: `${sd.toFixed(2)} yd`},
    {label:"Ajuste defensa", value: `${adjDefense.toFixed(3)}x`},
    {label:"Ajuste temperatura", value: `${adjTemp.toFixed(3)}x`},
    {label:"Ajuste horario", value: `${adjTime.toFixed(3)}x`},
  ];

  function downloadCSV(){
    const rows = [["threshold_yards","prob_>=threshold"]];
    chartData.forEach(r=>rows.push([r.x, r.p]));
    const csv = rows.map(r=>r.join(",")).join("\n");
    const blob = new Blob([csv], {type:"text/csv;charset=utf-8;"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "probabilidades_yardas.csv"; a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="px-6 py-6 border-b bg-white sticky top-0 z-10">
        <h1 className="text-2xl md:text-3xl font-semibold">Calculadora de probabilidad de yardas (NFL)</h1>
        <p className="text-sm text-neutral-500 mt-1">Ajustes por defensa, superficie, temperatura y horario. Con selector de jugador y rival.</p>
      </header>

      <main className="p-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Columna izquierda: parámetros */}
        <section className="lg:col-span-5 bg-white border rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-medium mb-4">Parámetros de entrada</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Player & Opponent */}
            <div>
              <label className="text-sm font-medium">Jugador</label>
              <select className="mt-1 w-full rounded-xl border px-3 py-2" value={playerId} onChange={e=>setPlayerId(e.target.value)}>
                {PLAYERS.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Rival</label>
              <select className="mt-1 w-full rounded-xl border px-3 py-2" value={opponentId} onChange={e=>setOpponentId(e.target.value)}>
                {OPPONENTS.map(o => <option key={o.id} value={o.id}>{o.name}</option>)}
              </select>
            </div>

            {/* Auto fetch toggle */}
            <div className="md:col-span-2 flex items-center gap-3">
              <input id="autofetch" type="checkbox" className="h-4 w-4" checked={autoFetch} onChange={e=>setAutoFetch(e.target.checked)} />
              <label htmlFor="autofetch" className="text-sm">Completar desde API automáticamente al cambiar jugador/rival</label>
              <button onClick={handleRefresh} className="ml-auto px-3 py-1.5 rounded-xl border">{loading ? "Actualizando..." : "Actualizar desde API"}</button>
            </div>
            {error && <div className="md:col-span-2 text-sm text-red-600">{error}</div>}

            {/* Kind */}
            <div className="col-span-1 md:col-span-2">
              <label className="text-sm font-medium">Tipo de yardas</label>
              <div className="mt-2 flex gap-3">
                <button className={`px-3 py-1.5 rounded-xl border ${kind==="rushing"?"bg-black text-white":"bg-white"}`} onClick={()=>setKind("rushing")}>Carrera</button>
                <button className={`px-3 py-1.5 rounded-xl border ${kind==="receiving"?"bg-black text-white":"bg-white"}`} onClick={()=>setKind("receiving")}>Recepción</button>
              </div>
            </div>

            {/* Surface */}
            <div className="col-span-1 md:col-span-2">
              <label className="text-sm font-medium">Superficie</label>
              <div className="mt-2 flex gap-3">
                <button className={`px-3 py-1.5 rounded-xl border ${surface==="grass"?"bg-black text-white":"bg-white"}`} onClick={()=>setSurface("grass")}>Pasto</button>
                <button className={`px-3 py-1.5 rounded-xl border ${surface==="turf"?"bg-black text-white":"bg-white"}`} onClick={()=>setSurface("turf")}>Turf</button>
              </div>
            </div>

            {/* Averages (can be overridden by user) */}
            <div>
              <label className="text-sm">Yardas promedio en pasto</label>
              <input type="number" className="mt-1 w-full rounded-xl border px-3 py-2" value={avgGrass} onChange={e=>setAvgGrass(Number(e.target.value))} />
            </div>
            <div>
              <label className="text-sm">Yardas promedio en turf</label>
              <input type="number" className="mt-1 w-full rounded-xl border px-3 py-2" value={avgTurf} onChange={e=>setAvgTurf(Number(e.target.value))} />
            </div>

            {/* Range for SD */}
            <div>
              <label className="text-sm">Menor cantidad de yardas (mín)</label>
              <input type="number" className="mt-1 w-full rounded-xl border px-3 py-2" value={minY} onChange={e=>setMinY(Number(e.target.value))} />
            </div>
            <div>
              <label className="text-sm">Mayor cantidad de yardas (máx)</label>
              <input type="number" className="mt-1 w-full rounded-xl border px-3 py-2" value={maxY} onChange={e=>setMaxY(Number(e.target.value))} />
            </div>

            {/* Defense */}
            <div>
              <label className="text-sm">Yardas que permite la defensa (rubro)</label>
              <input type="number" className="mt-1 w-full rounded-xl border px-3 py-2" value={defenseAllow} onChange={e=>setDefenseAllow(Number(e.target.value))} />
            </div>
            <div>
              <label className="text-sm">Promedio de liga (mismo rubro)</label>
              <input type="number" className="mt-1 w-full rounded-xl border px-3 py-2" value={leagueMean} onChange={e=>setLeagueMean(Number(e.target.value))} />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm">Elasticidad de ajuste defensa ({elasticity.toFixed(2)})</label>
              <input type="range" min="0" max="1" step="0.05" className="mt-2 w-full" value={elasticity} onChange={e=>setElasticity(Number(e.target.value))} />
            </div>

            {/* Weather & time */}
            <div>
              <label className="text-sm">Temperatura (°C)</label>
              <input type="number" className="mt-1 w-full rounded-xl border px-3 py-2" value={tempC} onChange={e=>setTempC(Number(e.target.value))} />
            </div>
            <div>
              <label className="text-sm">Hora inicio local (0–23)</label>
              <input type="number" className="mt-1 w-full rounded-xl border px-3 py-2" value={hourLocal} onChange={e=>setHourLocal(Number(e.target.value))} />
            </div>

            {/* Thresholds */}
            <div className="md:col-span-2">
              <label className="text-sm">Umbrales clave (separados por comas)</label>
              <input type="text" className="mt-1 w-full rounded-xl border px-3 py-2" value={thresholdsText} onChange={e=>setThresholdsText(e.target.value)} placeholder="50,75,100,125" />
            </div>

            {/* Grid for CSV/Chart */}
            <div>
              <label className="text-sm">Grilla: mínimo</label>
              <input type="number" className="mt-1 w-full rounded-xl border px-3 py-2" value={gridMin} onChange={e=>setGridMin(Number(e.target.value))} />
            </div>
            <div>
              <label className="text-sm">Grilla: máximo</label>
              <input type="number" className="mt-1 w-full rounded-xl border px-3 py-2" value={gridMax} onChange={e=>setGridMax(Number(e.target.value))} />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm">Grilla: paso</label>
              <input type="number" className="mt-1 w-full rounded-xl border px-3 py-2" value={gridStep} onChange={e=>setGridStep(Number(e.target.value))} />
            </div>
          </div>

          <div className="mt-5 flex gap-3 items-center">
            <button onClick={downloadCSV} className="px-4 py-2 rounded-xl bg-neutral-900 text-white shadow hover:opacity-90">Descargar CSV</button>
            {loading && <span className="text-xs text-neutral-500">Cargando datos…</span>}
          </div>
        </section>

        {/* Columna central: resumen y tabla */}
        <section className="lg:col-span-3 bg-white border rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-medium mb-4">Resumen</h2>
          <ul className="space-y-2">
            {summary.map(s => (
              <li key={s.label} className="flex justify-between text-sm">
                <span className="text-neutral-500">{s.label}</span>
                <span className="font-medium">{s.value}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <h3 className="text-sm font-semibold mb-2">Probabilidades clave</h3>
            <div className="border rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="text-left px-3 py-2">Umbral (yd)</th>
                    <th className="text-right px-3 py-2">P(Y ≥ X)</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map(r => (
                    <tr key={r.threshold} className="border-t">
                      <td className="px-3 py-2">{r.threshold}</td>
                      <td className="px-3 py-2 text-right">{formatPct(r.probability, 1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Columna derecha: gráfico */}
        <section className="lg:col-span-4 bg-white border rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-medium mb-4">Curva de probabilidad P(Y ≥ X)</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 10, right: 10, bottom: 10, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" tick={{ fontSize: 12 }} label={{ value: "Umbral (yd)", position: "insideBottom", dy: 10 }} />
                <YAxis domain={[0, 1]} tickFormatter={(v) => `${Math.round(v * 100)}%`} tick={{ fontSize: 12 }} />
                <Tooltip formatter={(v) => formatPct(Number(v), 2)} labelFormatter={(l) => `Umbral: ${l} yd`} />
                <Line type="monotone" dataKey="p" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-neutral-500 mt-3">Modelo: Normal(μ, σ) con μ ajustada por defensa, superficie, temperatura y horario. σ ≈ (máx − mín)/4. Datos precargados vía 'API' mock; reemplaza por tus endpoints.</p>
        </section>
      </main>

      <footer className="p-6 text-center text-xs text-neutral-500">Hecho para análisis rápidos. No constituye consejo de apuestas.</footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
