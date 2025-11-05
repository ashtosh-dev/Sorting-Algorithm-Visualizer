let array = [];
        let arraySize = 50;
        let speed = 50;
        let isSorting = false;

        const arrayContainer = document.getElementById('arrayContainer');
        const arraySizeSlider = document.getElementById('arraySize');
        const speedSlider = document.getElementById('speed');
        const statusElement = document.getElementById('status');

        arraySizeSlider.addEventListener('input', (e) => {
            arraySize = e.target.value;
            document.getElementById('arraySizeValue').textContent = arraySize;
            if (!isSorting) generateArray();
        });

        speedSlider.addEventListener('input', (e) => {
            speed = e.target.value;
            document.getElementById('speedValue').textContent = speed;
        });

        function getDelay() {
            return 1000 / speed;
        }

        function generateArray() {
            if (isSorting) return;
            array = [];
            for (let i = 0; i < arraySize; i++) {
                array.push(Math.floor(Math.random() * 350) + 20);
            }
            displayArray();
            statusElement.textContent = '';
        }

        function displayArray(compareIndices = [], swapIndices = [], sortedIndices = []) {
            arrayContainer.innerHTML = '';
            const barWidth = Math.max(2, (arrayContainer.offsetWidth - arraySize * 2) / arraySize);
            
            array.forEach((value, index) => {
                const bar = document.createElement('div');
                bar.classList.add('array-bar');
                bar.style.height = `${value}px`;
                bar.style.width = `${barWidth}px`;

                if (sortedIndices.includes(index)) {
                    bar.classList.add('sorted');
                } else if (swapIndices.includes(index)) {
                    bar.classList.add('swapping');
                } else if (compareIndices.includes(index)) {
                    bar.classList.add('comparing');
                }

                arrayContainer.appendChild(bar);
            });
        }

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        function disableButtons() {
            const buttons = document.querySelectorAll('button');
            buttons.forEach(btn => btn.disabled = true);
            arraySizeSlider.disabled = true;
        }

        function enableButtons() {
            const buttons = document.querySelectorAll('button');
            buttons.forEach(btn => btn.disabled = false);
            arraySizeSlider.disabled = false;
        }

        async function bubbleSort() {
            if (isSorting) return;
            isSorting = true;
            disableButtons();
            statusElement.textContent = 'Bubble Sort in progress...';

            const sortedIndices = [];
            const n = array.length;

            for (let i = 0; i < n - 1; i++) {
                let swapped = false;
                for (let j = 0; j < n - i - 1; j++) {
                    displayArray([j, j + 1], [], sortedIndices);
                    await sleep(getDelay());

                    if (array[j] > array[j + 1]) {
                        displayArray([], [j, j + 1], sortedIndices);
                        await sleep(getDelay());

                        [array[j], array[j + 1]] = [array[j + 1], array[j]];
                        swapped = true;
                    }
                }
                sortedIndices.push(n - i - 1);
                if (!swapped) break;
            }
            
            for (let i = 0; i < n; i++) sortedIndices.push(i);
            displayArray([], [], sortedIndices);
            
            statusElement.textContent = 'Bubble Sort completed!';
            isSorting = false;
            enableButtons();
        }

        async function selectionSort() {
            if (isSorting) return;
            isSorting = true;
            disableButtons();
            statusElement.textContent = 'Selection Sort in progress...';

            const sortedIndices = [];
            const n = array.length;

            for (let i = 0; i < n - 1; i++) {
                let minIdx = i;
                
                for (let j = i + 1; j < n; j++) {
                    displayArray([minIdx, j], [], sortedIndices);
                    await sleep(getDelay());

                    if (array[j] < array[minIdx]) {
                        minIdx = j;
                    }
                }

                if (minIdx !== i) {
                    displayArray([], [i, minIdx], sortedIndices);
                    await sleep(getDelay());
                    [array[i], array[minIdx]] = [array[minIdx], array[i]];
                }
                
                sortedIndices.push(i);
            }
            
            sortedIndices.push(n - 1);
            displayArray([], [], sortedIndices);
            
            statusElement.textContent = 'Selection Sort completed!';
            isSorting = false;
            enableButtons();
        }

        async function insertionSort() {
            if (isSorting) return;
            isSorting = true;
            disableButtons();
            statusElement.textContent = 'Insertion Sort in progress...';

            const sortedIndices = [0];
            const n = array.length;

            for (let i = 1; i < n; i++) {
                let key = array[i];
                let j = i - 1;

                displayArray([i], [], sortedIndices);
                await sleep(getDelay());

                while (j >= 0 && array[j] > key) {
                    displayArray([j, j + 1], [], sortedIndices);
                    await sleep(getDelay());

                    array[j + 1] = array[j];
                    displayArray([], [j, j + 1], sortedIndices);
                    await sleep(getDelay());
                    
                    j--;
                }
                
                array[j + 1] = key;
                sortedIndices.push(i);
            }

            displayArray([], [], sortedIndices);
            
            statusElement.textContent = 'Insertion Sort completed!';
            isSorting = false;
            enableButtons();
        }
        generateArray();