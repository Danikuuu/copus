// Timer
let countdownSeconds = 120;
const timerEl = document.getElementById("timer");

function updateCountdown() {
  const minutes = Math.floor(countdownSeconds / 60);
  const seconds = countdownSeconds % 60;
  timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  if (countdownSeconds > 0) {
    countdownSeconds--;
  } else {
    clearInterval(timerInterval);
    timerEl.textContent = "Time's up!";
    timerEl.style.backgroundColor = "red";
  }
}

const timerInterval = setInterval(updateCountdown, 1000);

// Generate 3 tables
const tablesContainer = document.getElementById('tablesContainer');

for (let t = 1; t <= 3; t++) {
  const wrapper = document.createElement('div');
  wrapper.className = 'copus-table';

  const tableHTML = `
    <table>
      <thead class="table-header">
        <tr>
          <th rowspan="2">Min</th>
          <th colspan="14">Student Actions</th>
          <th colspan="14">Teacher Actions</th>
          <th colspan="3">Level of Engagement</th>
          <th rowspan="2">Comments</th>
          <th rowspan="2">Action</th>
        </tr>
        <tr>
          <th>L</th><th>Ind</th><th>Grp</th><th>AQ</th><th>W</th><th>PQ</th><th>R</th><th>O</th><th>H</th><th>Etc1</th><th>Etc2</th><th>Etc3</th><th>Etc4</th><th>Etc5</th>
          <th>Lec</th><th>RtQ</th><th>FUp</th><th>Adm</th><th>Wk</th><th>D</th><th>G</th><th>MG</th><th>Etc1</th><th>Etc2</th><th>Etc3</th><th>Etc4</th><th>Etc5</th><th>Etc6</th>
          <th>High</th><th>Med</th><th>Low</th>
        </tr>
      </thead>
      <tbody id="copusBody${t}"></tbody>
    </table>
  `;

  wrapper.innerHTML = tableHTML;
  tablesContainer.appendChild(wrapper);

  // Generate 14 Rows for each table
  const tbody = wrapper.querySelector(`#copusBody${t}`);
  for (let i = 0; i < 14; i++) {
    const start = i * 2;
    const end = start + 2;
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${start}–${end}</td>
      ${'<td><input type="checkbox" /></td>'.repeat(14)}
      ${'<td><input type="checkbox" /></td>'.repeat(14)}
      ${'<td><input type="checkbox" /></td>'.repeat(3)}
      <td><input type="text" class="comment" placeholder="Type comment" /></td>
      <td><button style="padding: 4px 8px; font-size: 0.8rem; cursor: pointer;">Edit</button></td>
    `;
    tbody.appendChild(tr);
  }
}