import { iTarefa } from "../../types/iTarefa";
import Item from "./item";
import style from './Lista.module.scss';


function List({tarefas }: {tarefas: iTarefa[]}) {

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}
export default List;