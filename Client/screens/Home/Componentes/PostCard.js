import React, {useState} from 'react';
import { Text , View, Image, Button, StyleSheet, ScrollView } from 'react-native';
import ReviewCard from './ReviewCard';

export default function PostCard({id=1, image= require("../../assets/profile.png"), title, rating, hiringNumber, details, reviews}){
    function showDetails(){
        if(detailsView){
            setDetailsView(false);
        }else{
           setDetailsView(true);
        }
    }

    const [detailsView, setDetailsView] = useState(false);
    return (
        <View style={styles.container} id={id}>

            <View style= {{display: "flex", flexFlow:"row", alignItems : "center", justifyContent:"space-around"}}>
                <Image
                style = {{width: 50, height: 50, borderRadius:"5px", border:"1px solid black"}}
                source={image}
                />

                <Text style={styles.title}>
                {title}
                </Text>
            </View>

            <View style= {{display: "flex", flexFlow:"row", alignItems : "center", justifyContent:"space-around"}}>
                <Text> Rating: </Text>
                <Image
                style= {{width:25, height:25}}
                source={require('../../assets/Gold_Star.png')}
                />
                <Text style={styles.rating}>
                {rating}
                </Text>
            </View>
            <Image
            />
            <Text>
            {hiringNumber}
            </Text>
            <Button title="detalles" style={styles.button} onPress={()=> showDetails()}>
            </Button>
            { detailsView ?
            <View style={styles.details}>
                <Text style={{flexFlow:"center", margin : "8px"}}>{details}</Text>


           <View style={styles.detailsReviews}>
           <ScrollView
            horizontal = {true}
            showsHorizontalScrollIndicator= {false}>
           { reviews?

               reviews.map(i=>{
                   return(
                        <ReviewCard titulo={i.titulo} rating = {i.rating} review = {i.review} usuario = {i.usuario}/>
                   )
               }) 
               
            : null}

            </ScrollView>
           </View>
            </View>
            
            : null}
        </View>
    )
}



const styles = StyleSheet.create({
    container : {
        display : "flex",
        backgroundColor : "#DDD",
        borderRadius : "10px",
        border : "2px solid blue",
        justifyContent : "center",
        alignItems : "center",
        padding : "15px",
        width : "97vw",
    }
    ,title : {
        fontSize : "1.5rem",
        fontFamily : "Helvetica",
        fontWeight : 700
    }
    ,rating : {
        fontSize : "1.2rem",
        color : "gold",
        fontFamily : "Courier New",
        fontWeight : "bold",
        textShadow : "1px 1px 0px black",
    }
    ,button : {
    }
    ,details : {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"
    }
     ,detailsReviews : {
      display : "flex",
      flexFlow : "row"
      ,maxWidth : "100vw"
    }
})