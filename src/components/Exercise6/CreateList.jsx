import style from "./CreateList.module.scss";

export function CreateList(props) {
  return (
    <table className={style.listWrapper}>
      <tbody>
        {props.list.map((item, index) => {
          return (
            <tr className={style.listItem} key={index}>
              <td>
                {item.icon} {item.name}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
