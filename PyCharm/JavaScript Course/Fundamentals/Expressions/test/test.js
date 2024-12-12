/**
 * Imports task file in order to use functions declared in it
 * @param f file name or its relative path to task
 */
function import_task_file(f) {
    const path = require("path");
    const fs = require("fs");
    eval.apply(global, [fs.readFileSync(path.join(__dirname, "..",  f)).toString()]);
}

test('all functions are implemented correctly', () => {
    import_task_file("task.js");
    expect(a()).toBe("11"); //  "" + 1 + 1
    expect(b()).toBe(0); // "" - 1 + 1
    expect(c()).toBe(1); // true + false
    expect(d()).toBe(2); // 6 / "3"
    expect(e()).toBe(6); // "2" * "3"
    expect(f()).toBe("9px"); // 4 + 5 + "px"
    expect(g()).toBe("$45"); // "$" + 4 + 5
    expect(h()).toBe(2); // "4" - 2
    expect(i()).toBe(NaN); // "4px" - 2
    expect(j()).toBe("  -9  5"); // "  -9  " + 5
    expect(k()).toBe(-14); // "  -9  " - 5
    expect(l()).toBe(1); // null + 1
    expect(m()).toBe(NaN); // undefined + 1
    expect(n()).toBe(-2); // " \t \n" - 2
    expect(o()).toBe(true); // 2 < 12
    expect(p()).toBe(false); // "2" < "12"
    expect(q()).toBe(true); // "2" == 2
    expect(r()).toBe(false); // "2" === 2
    expect(s()).toBe(false); // isNaN(2)
    expect(t()).toBe(false); // isNaN("2")
});