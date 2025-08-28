<template>
  <div class="wrapper">
    <div class="chart-wrapper">
      <div class="chart-controls">
        <button class="chart-controls__btn" @click="vocApi.zoomReset">Reset Zoom</button>
        <button class="chart-controls__btn" @click="vocApi.zoomIn">Zoom In</button>
        <button class="chart-controls__btn" @click="vocApi.zoomOut">Zoom Out</button>
        <button class="chart-controls__btn" @click="vocApi.expandAll">Expand All</button>
        <button class="chart-controls__btn" @click="vocApi.collapseAll">Collapse All</button>
      </div>
      <vue3-org-chart @on-ready="initVue3OrgChart" :data="data">
        <template #node="{ item, children, open, toggleChildren }">
          <div class="node-item" :class="{ active: open, passive: !open }">
            <div>
              <img v-if="item.imageUrl" class="avatar" :src="item.imageUrl" alt="avatar" />
            </div>
            <div>
              <!-- <div>{{ item.id }} ({{ children.length }})</div> -->
              <div class="node-item__name">{{ item.name }}</div>
              <div class="node-item__members">{{ item.members }} team members</div>
            </div>
          </div>
          <div class="node-btn-container">
            <button
              class="node-btn-toggle"
              v-if="item.childNumber > 0"
              @click="toggleChildren"
              @touchend="toggleChildren"
            >
              <span class="node-btn-toggle__number">{{ item.childNumber }}</span>
              <span class="node-btn-toggle__arrow" :class="{ 'is-expanded': open }">
                {{ open ? '▲' : '▼' }}
              </span>
            </button>
          </div>
        </template>

        <template #no-data>
          <div style="color: blue; text-align: center">No data</div>
        </template>
      </vue3-org-chart>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import roles from './data/roles.json';

const vocApi = ref(null);
const data = reactive(roles);
console.log(data);

// this function will be called when vue3-org-chart is ready
// it will pass api object as argument
// api object contains reset function and some other functions will be added in future
const initVue3OrgChart = ({ api }) => {
  vocApi.value = api;
};
</script>

<style>
body {
  margin: 0;
  background: #eeeeee;
}

.chart-wrapper {
  border: 1px solid #e8e8e8;
  background: white;
  border-radius: 8px;
  min-height: 70vh;
  padding: 1rem;
  --vue3-org-chart-line-color: #ced2d4;
}

.chart-controls {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e8e8e8;
}

.chart-controls__btn {
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background-color: white;
  color: #4a5568;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.chart-controls__btn:hover {
  background-color: #f8f9fa;
  border-color: #cbd5e1;
  color: #2d3748;
}

.chart-controls__btn:active {
  background-color: #EBE9F8;
  transform: translateY(1px);
}
.wrapper {
  margin: 2rem;
}
.btn {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  cursor: pointer;
  outline: none;
}

.node-item {
  display: flex;
  width: 16rem;
  border-radius: 0.35rem;
  border: 1px solid #e2e8f0;
  padding: 0.5rem;
}

.node-item > :not([hidden]) ~ :not([hidden]) {
  margin-left: 1rem;
}
.node-item:hover {
  background-color: rgb(226 232 240);
}
.node-item.active {
  border-color: rgb(165 180 252);
  background-color: rgb(224 231 255);
}
.node-item.passive {
  background-color: rgb(248 250 252);
}

.node-item .avatar {
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
}

.node-btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -8px;
}

.node-btn-toggle {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  border: 1px solid #e2e8f0;
  background-color: #EBE9F8;
  border-radius: 0.25rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.node-btn-toggle__number {
  font-size: 0.75rem;
  font-weight: 500;
  color: #666666;
}

.node-btn-toggle__arrow {
  font-size: 0.625rem;
  color: #666666;
  transition: transform 0.2s ease;
}

.node-btn-toggle__arrow.is-expanded {
  transform: rotate(0deg);
}

.node-btn-toggle:hover {
  background-color: #f8f9fa;
  border-color: #cbd5e1;
}

.node-item__name {
  font-size: 1rem;
  font-weight: 500;
  color: #1a1a1a;
}

.node-item__members {
  font-size: 0.875rem;
  color: #666666;
  margin-top: 0.25rem;
}
</style>
