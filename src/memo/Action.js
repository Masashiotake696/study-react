import { TYPE_ADD } from './Const';
import { TYPE_DELETE } from './Const';
import { TYPE_FIND } from './Const';

export function addMemo(message) {
    return {
        type: TYPE_ADD,
        message: message,
    }
}

export function deleteMemo(id) {
    return {
        type: TYPE_DELETE,
        id: id,
    }
}

export function findMemo(keyWord)  {
    return {
        type: TYPE_FIND,
        keyWord: keyWord,
    }
}