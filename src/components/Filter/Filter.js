export default function Filter(props) {
  return (
    <label style={{ marginBottom: '20px', display: 'inline-block' }}>
      Find contacts by name
      <br />
      <input
        className="filter-input"
        type="text"
        name="filter"
        onChange={event => props.inputData(event)}
      />
    </label>
  );
}
