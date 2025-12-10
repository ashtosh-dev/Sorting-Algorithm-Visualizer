# Sorting Algorithm Visualizer

A web-based interactive visualizer for sorting algorithms that helps understand how different sorting algorithms work by visualizing the process step by step.

## Features

- **Multiple Sorting Algorithms**
  - Bubble Sort
  - Selection Sort
  - Insertion Sort
  - Radix Sort

- **Interactive Controls**
  - Adjust array size (5-100 elements)
  - Control sorting speed (1-100)
  - Generate new random arrays
  - Display numeric values on bars

- **Visual Feedback**
  - **Orange bars** - Elements being compared
  - **Red bars** - Elements being swapped
  - **Green bars** - Sorted elements
  - Real-time number display inside each bar

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3 (optional, for running a local server)

### Installation

1. Clone the repository or download the files:
```bash
git clone https://github.com/ankeet15/Sorting-Algorithm-Visualizer.git
cd sem3_dsa_project
```

### Running the Application

#### Option 1: Direct File Access
Simply open `index.html` in your web browser.

#### Option 2: Local Server (Recommended)
Run a Python HTTP server:
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

## How to Use

1. **Generate Array**: Click "Generate New Array" to create a random array
2. **Adjust Settings**:
   - Use "Array Size" slider to change number of elements
   - Use "Speed" slider to control animation speed
3. **Choose Algorithm**: Click any sorting algorithm button to visualize the sorting process
4. **Observe**: Watch how the bars change colors and positions as the algorithm sorts

## Project Structure

```
├── index.html       # Main HTML file
├── style.css        # All styling
├── script.js        # Sorting algorithm implementations
└── README.md        # This file
```

## Algorithms Explained

- **Bubble Sort**: Repeatedly steps through the list, compares adjacent elements and swaps them if they're in the wrong order
- **Selection Sort**: Divides array into sorted and unsorted parts, finds minimum element and places it in sorted part
- **Insertion Sort**: Builds sorted array one item at a time by inserting elements into their correct position
- **Radix Sort**: Non-comparative sorting algorithm that processes digits from least significant to most significant

## Team

**Team Name**: TechHustle

**Team Members**:
- Freyan Vas
- Ankit Shah
- Ashutosh Shenoy
- Aston Lewis
- Prithvisagar K
- Reevan D'souza

**Faculty**: Ms Pratibha Ganapati Gaonkar

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome Icons

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this project and submit pull requests for any improvements.
