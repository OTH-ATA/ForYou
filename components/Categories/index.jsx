import Image from 'next/image'
import style from "./categories.module.css"
import Card from '../../commons/Card'
import {Grid} from "@material-ui/core";

const Categories = () => {
    return (
        <div className={style.container}>
            <Grid container justifyContent="center" spacing={4}>
                <Card title={'Burgers'} image={'/icons/burger.png'}/>
                <Card title={'Pizza'} image={'/icons/pizza.png'}/>
                <Card title={'Tacos'} image={'/icons/tacos.png'}/>
                <Card title={'Steak'} image={'/icons/meat.png'}/>
                <Card title={'Pasta'} image={'/icons/pasta.png'}/>
                <Card title={'chicken plate'} image={'/icons/chicken.png'}/>
                <Card title={'Drinks'} image={'/icons/soda.png'}/>
                <Card title={'Dessert'} image={'/icons/iceCream.png'}/>


            </Grid>
        </div>
    )
}
export default Categories
