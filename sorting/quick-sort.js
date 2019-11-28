const items = [4, 2, 6, 5, 3, 9];

function swap(items, firstIdx, secondIdx) {
  [items[firstIdx], items[secondIdx]] = [items[secondIdx], items[firstIdx]]
}

function partition(items, left, right) {
  const pivot = items[~~((left + right) / 2)];

  while(left <= right) {
    while(items[left] < pivot) {
      left++;
    }
    
    while(items[right] > pivot) {
      right--;
    }

    if (left <= right) {
      swap(items, left, right);
      left++;
      right--;
    }
  }

  return left;
}

function quickSort(items, left = 0, right) {
  if (!Array.isArray(items) || !items.length) {
    return;
  }

  right = right || items.length;
  const index = partition(items, left, right);
  
  if (left < index - 1) {
    quickSort(items, left, index - 1);
  }

  if (index < right) {
    quickSort(items, index, right);
  }

  return items;
}
