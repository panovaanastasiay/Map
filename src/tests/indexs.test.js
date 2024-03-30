import ErrorRepository from '../index';

test('Add new error', () => {
    const repository = new ErrorRepository();
    repository.addError(1, 'Error 1');
    repository.addError(2, 'Error 2');
    repository.addError(3, 'Error 3');
    const res = Object.fromEntries(repository.errors);
    expect(res).toEqual({1: 'Error 1', 2: 'Error 2', 3: 'Error 3'});
});

test('Translate error', () => {
    const repository = new ErrorRepository();
    repository.addError(1, 'Error 1');
    repository.addError(2, 'Error 2');
    const res = repository.translate(2);
    expect(res).toBe('Error 2');
});

test('Unknown error', () => {
    const repository = new ErrorRepository();
    repository.addError(1, 'Error 1');
    const res = repository.translate(2);
    expect(res).toBe('Unknown error');
});