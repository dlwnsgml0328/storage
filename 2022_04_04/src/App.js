function App() {
  return (
    <div className="App">
      <form>
        <div>
          <label htmlFor="radio">
            <input type="radio" id="radio" name="radios" />
            냥냥1
          </label>
          <input type="text" placeholder="cant write anything" disabled />
        </div>

        <div>
          <label htmlFor="radio2">
            <input type="radio" id="radio2" name="radios" />
            냥냥2
          </label>
          <input type="text" placeholder="cant write anything" disabled />
        </div>
      </form>
    </div>
  );
}

export default App;
