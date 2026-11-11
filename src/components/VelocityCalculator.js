import {useState} from 'react';

const FACTORS = ['Speed', 'Clarity', 'Trust', 'Reusability'];
const LEVELS = [
  '0 — Nonexistent',
  '1 — Ad hoc',
  '2 — Developing',
  '3 — Defined',
  '4 — Optimized',
];

export default function VelocityCalculator() {
  const [scores, setScores] = useState({Speed: 2, Clarity: 2, Trust: 2, Reusability: 2});

  const index = FACTORS.reduce((acc, f) => acc * (scores[f] / 4), 1);
  const average = FACTORS.reduce((acc, f) => acc + scores[f], 0) / FACTORS.length;
  const min = Math.min(...FACTORS.map((f) => scores[f]));
  const constraints = FACTORS.filter((f) => scores[f] === min);

  return (
    <div style={{border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 8, padding: '1.25rem', margin: '1.5rem 0'}}>
      {FACTORS.map((f) => (
        <div key={f} style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem', flexWrap: 'wrap'}}>
          <label htmlFor={`tv-${f}`} style={{width: 110, fontWeight: 600}}>{f}</label>
          <select
            id={`tv-${f}`}
            value={scores[f]}
            onChange={(e) => setScores({...scores, [f]: Number(e.target.value)})}>
            {LEVELS.map((label, i) => (
              <option key={i} value={i}>{label}</option>
            ))}
          </select>
        </div>
      ))}
      <hr />
      <p><strong>Thoughtful Velocity index:</strong> {(index * 100).toFixed(0)} out of 100</p>
      <p><strong>What an additive model would have told you:</strong> {((average / 4) * 100).toFixed(0)} out of 100</p>
      <p><strong>Your constraint:</strong> {min === 4 ? 'None. Protect what you have.' : constraints.join(' and ')}</p>
    </div>
  );
}
