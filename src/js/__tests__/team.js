import Team from '../team';
import Character from '../character';

test('add() добавление персонажа', () => {
  const team = new Team();
  const hero = new Character('Bob');
  team.add(hero);
  expect(team.members.has(hero)).toBe(true);
});

test('add() дублирование при добавлении персонажа', () => {
  const team = new Team();
  const hero = new Character('Bob');
  team.add(hero);
  expect(() => team.add(hero)).toThrow('персонаж уже в команде');
});

test('addAll() добавить несколько персонажей', () => {
  const team = new Team();
  const alex = new Character('Alex');
  const ben = new Character('Ben');
  team.addAll(alex, ben);
  expect(team.members.size).toBe(2);
});

test('addAll() добавить несколько персонажей без генерации ошибки', () => {
  const team = new Team();
  const a = new Character('Alex');
  team.addAll(a, a, a, a);
  expect(team.members.size).toBe(1);
});
test('toArray() произвести конвертацию Set в массив', () => {
  const team = new Team();
  const a = new Character('Alex');
  team.add(a);
  expect(team.toArray()).toEqual([a]);
});
