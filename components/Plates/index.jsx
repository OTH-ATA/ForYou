import style from "../TakeAwayChoice/TakeAwayChoice.module.css";
import {Grid} from "@material-ui/core";
import Card from "../../commons/Card";

const Plates = () => {
    const choices = [
        {
            name: 'Tacos Chicken',
            img: '/img/tacosChiken.png',
            id: 1
        },
        {
            name: 'Tacos Meat',
            img: '/img/tacosMeat.png',
            id: 2
        },
        {
            name: 'Tacos Chicken',
            img: '/img/tacosChiken.png',
            id: 3
        },
        {
            name: 'Tacos Chicken',
            img: '/img/tacosChiken.png',
            id: 4
        }
    ]
    return (
        <div className={style.container}>
            <Grid container justifyContent="center" spacing={4}>
                {
                    choices.map(
                        e => <Card title={e.name} image={e.img} onClick={() => onClick(e.value)}/>
                    )
                }
            </Grid>
        </div>
    )
}

export default Plates