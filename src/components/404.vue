<template>
  <div class="error-page">
    <!-- Animated Background -->
    <div class="animated-background">
      <!-- Floating trucks -->
      <div class="truck truck-1">
        <div class="truck-body"></div>
        <div class="truck-wheels">
          <div class="wheel"></div>
          <div class="wheel"></div>
        </div>
      </div>
      <div class="truck truck-2">
        <div class="truck-body"></div>
        <div class="truck-wheels">
          <div class="wheel"></div>
          <div class="wheel"></div>
        </div>
      </div>
      
      <!-- Floating boxes -->
      <div class="box box-1"></div>
      <div class="box box-2"></div>
      <div class="box box-3"></div>
      <div class="box box-4"></div>
      <div class="box box-5"></div>
      <div class="box box-6"></div>
      
      <!-- Road lines -->
      <div class="road-line line-1"></div>
      <div class="road-line line-2"></div>
      <div class="road-line line-3"></div>
      <div class="road-line line-4"></div>
    </div>

    <!-- Main Content -->
    <div class="content-wrapper">
      <!-- Animated 404 -->
      <div class="error-code">
        <div class="digit digit-4-1">
          <span class="digit-inner">4</span>
          <div class="shadow"></div>
        </div>
        <div class="digit digit-0">
          <span class="digit-inner">0</span>
          <div class="crane-hook"></div>
          <div class="crane-line"></div>
          <div class="shadow"></div>
        </div>
        <div class="digit digit-4-2">
          <span class="digit-inner">4</span>
          <div class="shadow"></div>
        </div>
      </div>

      <!-- Animated Text -->
      <h1 class="error-title">
        <span class="word word-1">Oops!</span>
        <span class="word word-2">Delivery</span>
        <span class="word word-3">Lost</span>
      </h1>

      <p class="error-description">
        <span class="line">The page you're looking for has been</span>
        <span class="line">misplaced during transit!</span>
      </p>

      <!-- Animated Button -->
      <router-link to="/" class="home-button">
        <span class="button-icon">🏠</span>
        <span class="button-text">Return to Base</span>
        <div class="button-shine"></div>
      </router-link>

      <!-- Additional Info -->
      <div class="info-box ml-4">
        <div class="info-icon">📦</div>
        <p class="info-text">Don't worry! Our logistics team is on it.</p>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="compass">
      <div class="compass-needle"></div>
    </div>

    <!-- Floating particles -->
    <div class="particle particle-1"></div>
    <div class="particle particle-2"></div>
    <div class="particle particle-3"></div>
    <div class="particle particle-4"></div>
    <div class="particle particle-5"></div>
    <div class="particle particle-6"></div>
    <div class="particle particle-7"></div>
    <div class="particle particle-8"></div>
  </div>
</template>

<style scoped>
.error-page {
  min-height: 100vh;
  background: #111827;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
}

/* Animated Background */
.animated-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

/* Floating Trucks */
.truck {
  position: absolute;
  width: 80px;
  height: 40px;
  animation: float-horizontal 15s infinite linear;
}

.truck-1 {
  top: 20%;
  animation-duration: 20s;
}

.truck-2 {
  top: 70%;
  animation-duration: 25s;
  animation-delay: -10s;
}

.truck-body {
  width: 60px;
  height: 30px;
  background: linear-gradient(135deg, #9F153E 0%, #c96860 100%);
  border-radius: 5px;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.truck-body::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #8f4740 0%, #9F153E 100%);
  right: -15px;
  top: 0;
  border-radius: 0 5px 5px 0;
}

.truck-wheels {
  position: absolute;
  bottom: -5px;
  display: flex;
  gap: 30px;
  left: 10px;
}

.wheel {
  width: 12px;
  height: 12px;
  background: #333;
  border-radius: 50%;
  border: 2px solid #555;
  animation: rotate 1s infinite linear;
}

@keyframes float-horizontal {
  0% { left: -100px; }
  100% { left: calc(100% + 100px); }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Floating Boxes */
.box {
  position: absolute;
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%);
  border: 2px solid rgba(255, 255, 255, 0.3);
  animation: float-boxes 10s infinite ease-in-out;
  opacity: 0.7;
}

.box::before {
  content: '';
  position: absolute;
  inset: 3px;
  border: 1px dashed rgba(255, 255, 255, 0.5);
}

.box-1 { top: 10%; left: 10%; animation-duration: 8s; }
.box-2 { top: 30%; right: 15%; animation-duration: 12s; animation-delay: -2s; }
.box-3 { bottom: 20%; left: 20%; animation-duration: 10s; animation-delay: -4s; }
.box-4 { top: 60%; right: 25%; animation-duration: 15s; animation-delay: -6s; }
.box-5 { bottom: 30%; right: 10%; animation-duration: 11s; animation-delay: -3s; }
.box-6 { top: 80%; left: 40%; animation-duration: 13s; animation-delay: -5s; }

@keyframes float-boxes {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-30px) rotate(180deg);
  }
}

/* Road Lines */
.road-line {
  position: absolute;
  bottom: 0;
  width: 100px;
  height: 5px;
  background: rgba(255, 255, 255, 0.3);
  animation: road-move 3s infinite linear;
}

.line-1 { left: 0%; animation-delay: 0s; }
.line-2 { left: 25%; animation-delay: -0.75s; }
.line-3 { left: 50%; animation-delay: -1.5s; }
.line-4 { left: 75%; animation-delay: -2.25s; }

@keyframes road-move {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(200px);
    opacity: 0;
  }
}

/* Content Wrapper */
.content-wrapper {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 800px;
  width: 100%;
}

/* Animated 404 */
.error-code {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.digit {
  position: relative;
  width: 150px;
  height: 200px;
  perspective: 1000px;
}

.digit-inner {
  font-size: 10rem;
  font-weight: 900;
  background: linear-gradient(135deg, #fff 0%, #9F153E 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  animation: digit-bounce 2s infinite ease-in-out;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  position: relative;
}

.digit-4-1 .digit-inner {
  animation-delay: 0s;
}

.digit-0 .digit-inner {
  animation-delay: 0.2s;
  animation-name: digit-swing;
}

.digit-4-2 .digit-inner {
  animation-delay: 0.4s;
}

.shadow {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 20px;
  background: radial-gradient(ellipse, rgba(0, 0, 0, 0.4), transparent);
  animation: shadow-pulse 2s infinite ease-in-out;
}

@keyframes digit-bounce {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.05);
  }
}

@keyframes digit-swing {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  75% {
    transform: rotate(-10deg);
  }
}

@keyframes shadow-pulse {
  0%, 100% {
    transform: translateX(-50%) scale(1);
    opacity: 0.4;
  }
  50% {
    transform: translateX(-50%) scale(0.8);
    opacity: 0.2;
  }
}

/* Crane Animation on 0 */
.crane-line {
  position: absolute;
  width: 3px;
  height: 50px;
  background: #9F153E;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  animation: crane-up-down 3s infinite ease-in-out;
}

.crane-hook {
  position: absolute;
  width: 20px;
  height: 15px;
  border: 3px solid #9F153E;
  border-top: none;
  border-radius: 0 0 10px 10px;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  animation: crane-up-down 3s infinite ease-in-out;
}

@keyframes crane-up-down {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-30px);
  }
}

/* Error Title */
.error-title {
  font-size: 3rem;
  font-weight: 900;
  color: white;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  text-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
}

.word {
  display: inline-block;
  animation: word-float 3s infinite ease-in-out;
}

.word-1 { animation-delay: 0s; }
.word-2 { animation-delay: 0.3s; }
.word-3 { animation-delay: 0.6s; }

@keyframes word-float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}

/* Error Description */
.error-description {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  line-height: 1.8;
}

.line {
  display: block;
  animation: fade-in-up 1s ease-out backwards;
}

.line:nth-child(1) { animation-delay: 0.5s; }
.line:nth-child(2) { animation-delay: 0.7s; }

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Home Button */
.home-button {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 3rem;
  background: linear-gradient(135deg, #9F153E 0%, #c96860 100%);
  color: white;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 700;
  border-radius: 50px;
  box-shadow: 0 10px 40px rgba(168, 87, 80, 0.4);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  animation: button-pulse 2s infinite;
}

.home-button:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 50px rgba(168, 87, 80, 0.6);
}

.button-icon {
  font-size: 1.5rem;
  animation: icon-bounce 1s infinite;
}

@keyframes icon-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.button-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% { left: -100%; }
  50%, 100% { left: 100%; }
}

@keyframes button-pulse {
  0%, 100% {
    box-shadow: 0 10px 40px rgba(168, 87, 80, 0.4);
  }
  50% {
    box-shadow: 0 10px 60px rgba(168, 87, 80, 0.7);
  }
}

/* Info Box */
.info-box {
  margin-top: 3rem;
  padding: 1.5rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  animation: info-box-float 3s infinite ease-in-out;
  max-width: 90%;
}

@keyframes info-box-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.info-icon {
  font-size: 2rem;
  animation: rotate-slow 10s infinite linear;
  flex-shrink: 0;
}

@keyframes rotate-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.info-text {
  color: white;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
}

/* Compass */
.compass {
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 80px;
  height: 80px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: compass-spin 20s infinite linear;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.compass::before {
  content: 'N';
  position: absolute;
  top: 5px;
  color: white;
  font-weight: 900;
  font-size: 0.8rem;
}

.compass-needle {
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 50px solid #9F153E;
  position: relative;
  animation: needle-wobble 3s infinite ease-in-out;
}

@keyframes compass-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes needle-wobble {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(10deg); }
}

/* Floating Particles */
.particle {
  position: absolute;
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: particle-float 15s infinite ease-in-out;
}

.particle-1 { top: 10%; left: 5%; animation-duration: 12s; }
.particle-2 { top: 20%; right: 10%; animation-duration: 14s; animation-delay: -2s; }
.particle-3 { bottom: 15%; left: 15%; animation-duration: 16s; animation-delay: -4s; }
.particle-4 { top: 50%; right: 5%; animation-duration: 13s; animation-delay: -6s; }
.particle-5 { bottom: 25%; right: 20%; animation-duration: 18s; animation-delay: -8s; }
.particle-6 { top: 70%; left: 25%; animation-duration: 15s; animation-delay: -3s; }
.particle-7 { top: 40%; left: 40%; animation-duration: 17s; animation-delay: -5s; }
.particle-8 { bottom: 40%; right: 35%; animation-duration: 14s; animation-delay: -7s; }

@keyframes particle-float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.6;
  }
  25% {
    transform: translate(50px, -50px) scale(1.5);
    opacity: 1;
  }
  50% {
    transform: translate(100px, 0) scale(1);
    opacity: 0.6;
  }
  75% {
    transform: translate(50px, 50px) scale(0.8);
    opacity: 0.4;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .error-page {
    padding: 1rem;
  }

  .error-code {
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  
  .digit {
    width: 80px;
    height: 120px;
  }
  
  .digit-inner {
    font-size: 5rem;
  }
  
  .error-title {
    font-size: 1.75rem;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .error-description {
    font-size: 1rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
  
  .home-button {
    padding: 1rem 2rem;
    font-size: 1rem;
  }

  .button-icon {
    font-size: 1.25rem;
  }

  .info-box {
    margin-top: 2rem;
    padding: 1rem 1.5rem;
    flex-direction: column;
    text-align: center;
  }

  .info-text {
    font-size: 0.9rem;
  }
  
  .compass {
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
  }

  .compass-needle {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 35px solid #9F153E;
  }
  
  .truck {
    width: 50px;
    height: 25px;
  }

  .truck-body {
    width: 40px;
    height: 20px;
  }

  .truck-body::before {
    width: 15px;
    height: 15px;
  }

  .truck-wheels {
    gap: 20px;
    left: 5px;
  }

  .wheel {
    width: 8px;
    height: 8px;
  }

  .box {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 480px) {
  .digit {
    width: 60px;
    height: 90px;
  }

  .digit-inner {
    font-size: 3.5rem;
  }
  
  .error-title {
    font-size: 1.5rem;
    gap: 0.4rem;
  }
  
  .error-description {
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .home-button {
    padding: 0.875rem 1.5rem;
    font-size: 0.9rem;
    gap: 0.5rem;
  }

  .button-icon {
    font-size: 1.1rem;
  }

  .info-box {
    padding: 1rem;
    margin-top: 1.5rem;
  }

  .info-icon {
    font-size: 1.5rem;
  }

  .info-text {
    font-size: 0.85rem;
  }
  
  .compass {
    display: none;
  }

  .crane-line {
    height: 30px;
    top: -40px;
  }

  .crane-hook {
    width: 15px;
    height: 12px;
    top: -15px;
  }
}
</style>
