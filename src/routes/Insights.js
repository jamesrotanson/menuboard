import React, { useState } from 'react';
import ChartEatingPattern from '../components/ChartEatingPattern';
import ChartSavings from '../components/ChartSavings';
import ChartNutrition from '../components/ChartNutrition';
import ChartWeight from '../components/ChartWeight';
import '../App.css';
import { ForkKnife, CurrencyCircleDollar, Scales, Heart } from 'phosphor-react';
import LoadingPage from './LoadingPage';

const Insights = () => {

  // Loader
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 600);

  return (
    <div>
      {loading ? <LoadingPage/> : 
      <div className='Page-container'>
        <div className="Page-small">
          <div className="Page-header">
            <div className="Page-title">
              <div>
                <h2>Insights</h2>
                <p>Understand your eating patterns and behaviour to eat better meals, save money, and reach your health goals</p>
              </div>
            </div>
          </div>
          <br></br>
          <div className='Card-group'>
            <div className='Card Chart-tile half'>
              <div className='flex Chart-title'>
                <ForkKnife size={24} />
                <h4>Eating patterns</h4>
              </div>
              <small>This week you mostly eat at home, followed with eating at the office</small>
              <ChartEatingPattern/>
            </div>

            <div className='Card Chart-tile'>
              <div className='flex Chart-title'>
                <CurrencyCircleDollar size={24} />
                <h4>Savings</h4>
              </div>
              <small>On average you saved more by cooking at home compared to last week</small>
              <ChartSavings/>
            </div>    
          </div>

          <div className='Card-group'>
            <div className='Card Chart-tile half'>
              <div className='flex Chart-title'>
                <Scales size={24} />
                <h4>Body weight</h4>
              </div>
              <small>You have lost about 5kgs since you started planning your meals. Keep going!</small>
              <ChartWeight/>
            </div>

              <div className='Card Chart-tile'>
                <div className='flex Chart-title'>
                  <Heart size={24} />
                  <h4>Nutrition</h4>
                </div>
                <small>On average you consumed more carbs, protein, and vitamin compared to your partner</small>
                <ChartNutrition/>
              </div>
          </div>

          <br></br>

        </div>
      </div>
    }
    </div>
  );
};

export default Insights;
