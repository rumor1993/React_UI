import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {

  // 도넛 크기
  lineWidth:5,
  
  // 라벨이름
	labels: [
		'React.js',
		'Jqery.js',
        'HTML',
        'vue.js',
        'typeScript/js',
        'coffeeScript'
	],
	datasets: [{
    // 데이터 값 (비율)
    data: [28.79, 21.04, 19.73, 14.83, 7.80, 7.80],
     
    // 그래프 색상
		backgroundColor: [
		'DodgerBlue',
		'MediumTurquoise',
        'MediumSpringGreen',
        'Yellow',
        'PaleVioletRed',
        'MediumPurple'
    ],
    
    // 호버 색상 (기본 블랙)
		hoverBackgroundColor: [
    ],

    
	}]
};

const options = {
  cutoutPercentage: 80,
  maintainAspectRatio: false,
  responsive: false,
  legend: {
    position: 'right',
    labels: {
      padding: 60,
      fontsize: 5,
      boxWidth: 20
    }
  }
}

class DoughnutExample extends React.Component {

  render() {
    return (
      <div className="doughnut">
        <Doughnut data={data} options={options} width={500} height={500} />
      </div>
    );
  }
};



export default DoughnutExample