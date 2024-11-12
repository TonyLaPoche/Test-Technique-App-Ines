import {JoinAndFormatPipe} from './joinAndFormat.pipe';

describe('JoinPipe', () => {

    const pipe = new JoinAndFormatPipe();
    const mockStringArray = ["abe", "bob", "conrad"];
    const mockSingleItemArray = ['single'];
    const mockCharArray = ['a', 'b', 'c'];
    const mockNumbersArray = ['1123', '245', '3'];
    const mockStringWithEmptyStringArray = ['alpha', '', 'charlie'];
    const mockStringWithNullValueArray = ['alpha', null, 'charlie', undefined];
    const mockEmptyArray = ['','',''];
    const mockSpecialCharArray = ["@azerty", "qw€rty"]
    const mockCustomSymbol = " → ";

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('join string[] with default symbol', () => {
        expect(pipe.transform(mockStringArray)).toBe("Abe · Bob · Conrad")
    })

    it('join string[] with custom symbol', () => {
        expect(pipe.transform(mockStringArray, mockCustomSymbol)).toBe("Abe → Bob → Conrad")
    })

    it('join string[] with no title casing', () => {
        expect(pipe.transform(mockStringArray, ' · ', false)).toBe('abe · bob · conrad');
    });

    it('join string[] with empty string as separator', () => {
        expect(pipe.transform(mockStringArray, '')).toBe('AbeBobConrad');
    });

    it('join single item array', () => {
        expect(pipe.transform(mockSingleItemArray)).toBe('Single');
    });

    it('join char[]', () => {
        expect(pipe.transform(mockCharArray)).toBe('a · b · c')
    })

    it('join stringNumber[]', () => {
        expect(pipe.transform(mockNumbersArray)).toBe('1123 · 245 · 3')
    })

    it('join stringWithEmptyStringArray[]', () => {
        expect(pipe.transform(mockStringWithEmptyStringArray)).toBe('Alpha · Charlie')
    })

    it('join stringWithNullValueArray[]', () => {
        expect(pipe.transform(mockStringWithNullValueArray)).toBe('Alpha · Charlie')
    })

    it('join emptyArray[]', () => {
        expect(pipe.transform(mockEmptyArray)).toBe('')
    })

    it('join specialCharacter', () => {
        expect(pipe.transform(mockSpecialCharArray)).toBe('@azerty · Qw€rty')
    })
});
