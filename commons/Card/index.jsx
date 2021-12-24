import Image from 'next/image'
import style from "./card.module.css"
import {Card, CardActionArea, CardActions} from "@material-ui/core";
import {Grid} from "@material-ui/core";

const MyCard = (props) => {
    return (
        <Grid key={props.title} item>
            <Card className={style.container}>
                <CardActionArea>
                    <div className={style.card}>
                        <Image width="100px" height="100px" src={props.image}/>
                        <span className={style.title}>{props.title}</span>
                    </div>
                </CardActionArea>
            </Card>
        </Grid>


    )
}
export default MyCard
