function App() {
  const secretKey = 123456;
  return (
    <>
      <h1>hello {secretKey}</h1>

      <form>
        <label>First name:<input type="text" name="fname" /></label>
        <label>Last name:<input type="text" name="lname" /></label>
        <input type="submit" value="Submit" />
        <input type="hidden" id="custId" name="custId" value="3487" />
      </form>
    </>
  );
}

export default App;
