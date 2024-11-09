import {JoinPipe} from './join.pipe';

describe('JoinPipe', () => {

  const pipe = new JoinPipe();
  const mockStringArray = ["abe", "bob", "conrad"];
  const mockCustomSymbol = " → "

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('join string[] with default symbol', () => {
      expect(pipe.transform(mockStringArray)).toBe("Abe · Bob · Conrad")
    })

    it('join string[] with custom symbol', () => {
      expect(pipe.transform(mockStringArray, mockCustomSymbol)).toBe("Abe → Bob → Conrad")
    })

});
