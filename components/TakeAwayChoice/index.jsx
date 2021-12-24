import Image from 'next/image'
import style from "./takeAwayChoice.module.css"
import Card from '../../commons/Card'
import {Grid} from "@material-ui/core";

const TakeAwayChoice = () => {
    return (
        <div className={style.container}>
            <Grid container justifyContent="center" spacing={4}>
                <Card title={'Dine In'} image={'/icons/dineIn.png'}/>
                <Card title={'Take Away'} image={'/icons/takeAway.png'}/>
            </Grid>
        </div>
    )
}
export default TakeAwayChoice
