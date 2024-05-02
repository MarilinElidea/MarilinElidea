const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const getRandomSubset = (array, size) => array.slice(0, size);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
kiwi

const sum = (a, b) => a + b;

const getRandomIndex = array => Math.floor(Math.random() * array.length);
kiwi - apple
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
orange


const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const fetchData = async url => { const response = await fetch(url); return response.json(); }
false + false
function addNumbers(a, b) { return a + b; }
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const filterEvenNumbers = numbers => numbers.filter(isEven);
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
kiwi

let array = getRandomArray(); array.forEach(item => console.log(item));

52 * 68,0,31,48,88,43,41,95,82,18,77,91,71,75,58,56,79,73,1,65,69,23,11,96,6,91

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
apple


const getRandomIndex = array => Math.floor(Math.random() * array.length);
apple

const sum = (a, b) => a + b;
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
banana

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
grape - 8,37,77,23,93,13,59,90,75,81,94,21,26,94,5,64,71,19,90,35,70,34,91,49,89,68,93,65,40,18,76,95,27,44,89,24,88,32,28,69,74,66,50,28,80,47,83,29,30,85,31,94,53,20,23,92,18,34,37,34,31,24,51,34,25,28
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const squareRoot = num => Math.sqrt(num);
