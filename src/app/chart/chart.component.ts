import { Component } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  questions = [
    { questionText: 'Question 1', answer: true },
    { questionText: 'Question 2', answer: false },
    { questionText: 'Question 3', answer: true },
    { questionText: 'Question 4', answer: true },
    { questionText: 'Question 5', answer: false },
    { questionText: 'Question 6', answer: true },
    { questionText: 'Question 7', answer: false },
    { questionText: 'Question 8', answer: true },
    { questionText: 'Question 9', answer: false },
    { questionText: 'Question 10', answer: true },
  ];
  
  currentQuestion = 0;
  userAnswers: boolean[] = [];
  score = 0;
  isQuizSubmitted = false;

  nextQuestion() {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
    }
  }

  previousQuestion() {
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
    }
  }

  submitQuiz() {
    this.isQuizSubmitted = true;

    // Calculate score
    this.score = 0;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.userAnswers[i] === this.questions[i].answer) {
        this.score++;
      }
    }

    // Display score in pie chart
    const chartData = {
      labels: ['Correct', 'Incorrect'],
      datasets: [{
        data: [this.score, this.questions.length - this.score],
        backgroundColor: ['#36A2EB', '#FF6384']
      }]
    };
    const chartOptions = {
      responsive: true,
      legend: {
        display: false
      },
      title: {
        display: true,
        text: `Quiz Results - ${this.score}/${this.questions.length} (${(this.score / this.questions.length * 100).toFixed(2)}%)`
      }
    };
    const chart = new Chart('chart', {
      type: 'pie',
      data: chartData,
      options: chartOptions
    });
  }
}


