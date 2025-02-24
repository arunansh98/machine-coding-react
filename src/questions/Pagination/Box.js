export default function Box({ data }) {
  return (
    <tr>
      <td>{data.title}</td>
      <td>{data.description}</td>
      <td>{data.price}</td>
      <td>{data.rating}</td>
    </tr>
  );
}
