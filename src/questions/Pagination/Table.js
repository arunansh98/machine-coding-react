export default function Table({ renderedProducts }) {
  return (
    <table>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Price</th>
        <th>Rating</th>
      </tr>
      {renderedProducts}
    </table>
  );
}
