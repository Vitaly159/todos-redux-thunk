import Notes from "./components/Notes/Notes";
import "./app.css";

function App() {
  function getCombination(arr, n) {
    const sortedArr = arr.filter(x => x <= n).sort((a, b) => a - b);
    const results = [];
    const part = [];
    let sum = 0;

    if (!sortedArr.length || sortedArr[0] > n) {
        return results;
    }
    sortedArr.push(n + 1);

    const mapFn = i => sortedArr[i];

    for(let i = 0; i < sortedArr.length; i++) {
        sum += sortedArr[i];
        if (sum > n) {
            const last = part.pop();
            sum = sum - sortedArr[i] - sortedArr[last];
            i = last;
        } else {
            part.push(i);

            if (sum === n) {
                results.push(part.map(mapFn));
            }
        }
    }

    return results;
}

console.log(getCombination([7, 8, 3, 4, 5, 6, 1, 2], 8));

  return (
    <div className="app-wrapper">
      <div className="header">
        <h1>todos</h1>
      </div>

      <Notes />

      <div className="footer footer1"></div>
      <div className="footer footer2"></div>
    </div>
  );
}

export default App;
