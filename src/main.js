import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as tf from '@tensorflow/tfjs';

async function loadModel() {
  const model = await tf.loadLayersModel('path/to/model.json');
  return model;
}
createApp(App).mount('#app')
