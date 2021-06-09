
function saveData() {
    console.log('todos:', data);
    localStorage.setItem('data', JSON.stringify(data));
}
  
function loadData() {
    const dataString = localStorage.getItem('data') || '[]';
    return JSON.parse(dataString);
}

export default {saveData, loadData};