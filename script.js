document.addEventListener('DOMContentLoaded', () => {
    const fire = document.querySelector('.fire');
    const extinguisher = document.querySelector('.extinguisher');
    const extinguisherSound = new Audio('path/to/your/sound.mp3'); // 替换为您的音频文件路径
    const fireTypeInput = document.getElementById('fireType');
    const advice = document.getElementById('advice');
    const co2Video = document.getElementById('co2Video');

    extinguisher.addEventListener('click', () => {
        extinguisherSound.play();
        fire.classList.add('fading');

        fire.addEventListener('animationend', () => {
            fire.classList.remove('fading');
        }, { once: true });

        alert('火已被扑灭！');
    });

    fireTypeInput.addEventListener('input', (event) => {
        const fireType = event.target.value.trim().toLowerCase();
        advice.textContent = ''; // Clear previous advice

        switch (fireType) {
            case '油式':
                advice.textContent = '使用干粉式灭火器！';
                break;
            case '电气':
                advice.textContent = '使用二氧化碳灭火器！';
                co2Video.style.display = 'block'; // 显示视频
                co2Video.play(); // 播放视频
                break;
            case '纸张':
                advice.textContent = '使用水型灭火器！';
                break;
            case '液体':
                advice.textContent = '使用泡沫灭火器！';
                break;
            default:
                advice.textContent = '请输入正确的火灾类型（如：油式、电气、纸张、液体）。';
                break;
        }
    });
});