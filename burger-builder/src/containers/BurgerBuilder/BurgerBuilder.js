import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

export default class BurgerBuilder extends Component {
    state = {
        ingrediants : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasingModel: false

    }
    updatePurchaseState =(ingrediants)=>{
        debugger;
        const sum = Object.keys(ingrediants)
        .map((ikey)=>{
          return ingrediants[ikey];
        })
        .reduce( (sum, ele) =>{
            return sum+ele;
        },0)
        this.setState({purchasable: sum > 0});

    }
    addIngrediantHandler = (type) => {
        console.log("adding ingrediant")
        const oldCount = this.state.ingrediants[type];
        const updatedCount = oldCount + 1;
        const updatedIngrediants = {
            ...this.state.ingrediants
        };
        updatedIngrediants[type] = updatedCount;
        const priceAdd = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdd;
        console.log("=======",updatedIngrediants)
        this.setState({totalPrice: newPrice, ingrediants: updatedIngrediants})
        this.updatePurchaseState(updatedIngrediants);
    }

    removeIngredingredientHandler = (type) => {
        debugger;
       console.log("remove clicked")
        const oldCount = this.state.ingrediants[type];
        if(oldCount<=0) {
            return;
        }
        const updatedCount = oldCount -1;
        const updatedIngrediants = {
            ...this.state.ingrediants
        };
        updatedIngrediants[type] = updatedCount;
        const priceAdd = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAdd;
        console.log("=======",updatedIngrediants)
        this.setState({totalPrice: newPrice, ingrediants: updatedIngrediants})
        this.updatePurchaseState(updatedIngrediants);
    }

    purchasingModelHandler = ()=>{
      this.setState({purchasingModel:true})
    }
    modelCloseHandler = ()=>{
        this.setState({purchasingModel:false})
    }

    purchaseContinueModelHandler = () =>{
        alert("your'e continue!");
    }

    render() {
        //for diabling the less button if there are no added ingrediant
        const disabledInfo = {
            ...this.state.ingrediants
        };
        for( let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <React.Fragment>
                <Modal show={this.state.purchasingModel} modelClose={this.modelCloseHandler}>
                    <OrderSummary ingrediants={this.state.ingrediants} 
                                totalPrice={this.state.totalPrice}
                                modelClose={this.modelCloseHandler} 
                                purchaseContinue={this.purchaseContinueModelHandler}></OrderSummary>
                </Modal>
                {/* <p>Burger</p> */}
                <Burger ingrediants={this.state.ingrediants}></Burger>
                <BuildControls ingredientAdded={this.addIngrediantHandler} 
                ingredientRemove={this.removeIngredingredientHandler}
                price={this.state.totalPrice}
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                ordered={this.purchasingModelHandler}/> 
            </React.Fragment>
        )
    }
}
