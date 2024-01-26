function shellSort(arr) {
    var n = arr.length;
    var trocas = 0;

    for (var gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (var i = gap; i < n; i++) {
            var temp = arr[i];
            var j = i;

            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
                trocas++;
            }

            arr[j] = temp;
        }
    }

    return trocas;
}

var vetor = [235, 14, 1, 133, 23, 43, 21, 435, 200, 37];
var trocas = shellSort(vetor);

console.log("Vetor ordenado:", vetor);
console.log("Número de trocas:", trocas);
