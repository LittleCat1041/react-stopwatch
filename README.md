# React Stopwatch

A high-precision stopwatch application built with **React** and **Vite**. This project demonstrates efficient state management and timer logic implementation using React Hooks.

## Key Features
 - **Accurate Timing:** Measures time in Hours, Minutes, Seconds, and Milliseconds.
 - **Controls:** Start, Stop, and Reset functionality.
 - **Performance Optimized:** Uses `useRef` to manage timer intervals without triggering unnecessary re-renders.
 - **Modern UI:** Clean, centered layout with responsive CSS styling.

## Technical Highlights (Code Logic)
 - **`useRef` vs `useState`:** I used `useRef` to store the `intervalId` and `startTime`. Unlike `useState`, updating a ref **does not trigger a re-render**, which is crucial for performance when handling high-frequency updates like a timer.
 - **`useEffect` Cleanup:** Implements a cleanup function to `clearInterval` when the component unmounts, preventing **memory leaks** and ensuring the app runs smoothly.
 - **Time Formatting:** Custom algorithm to mathematically convert raw milliseconds into a human-readable `HH:MM:SS:MS` format.

## Tech Stack
 - React (Vite), CSS

## How to Run
### 1.  **Clone the Repository**
```bash
git clone https://github.com/LittleCat1041/react-stopwatch.git
```
### 2.  **Install Dependencies**
```bash
cd react-stopwatch
```
```bash
npm install
```
### 3.  **Start the Application**
```bash
npm run dev
```

## Screenshots

<img width="941" height="672" alt="image" src="https://github.com/user-attachments/assets/6c496d60-aa7c-4d32-b888-30f0c1527f19" />

