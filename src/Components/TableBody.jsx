export default function TableBody({ tableData, columns }) {
  return (
    <tbody>
      {tableData.map((data) => {
        return (
          <tr key={data.id}>
            {columns.map(({ accessor }) => {
              console.log(data[accessor]);
              if (accessor === "dateOfBirth") {
                return (
                  <td key={accessor}>
                    {new Date(data[accessor]).toLocaleDateString()}
                  </td>
                );
              }
              const tData = data[accessor] ? data[accessor] : "——";
              return <td key={accessor}>{tData}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
}
