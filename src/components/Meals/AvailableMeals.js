import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Chicken Chettinad',
        description: 'Full of flavour and bold masalas, from the cuisine of chettinad ',
        price: 250,
    },
    {
        id: 'm2',
        name: 'Aloo Gobi',
        description: 'Potatoes, Cauliflower',
        price: 150,
    },
    {
        id: 'm3',
        name: 'Fish Curry',
        description: 'Semi Stewed Kerala-Style Curry',
        price: 230,
    },
    {
        id: 'm4',
        name: 'Chicken Tikka',
        description: 'Small pieces of Boneless Chicken',
        price: 220,
    },

   
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price} />
    ));

    return <section className={classes.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card >
    </section>




};

export default AvailableMeals;