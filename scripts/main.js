window.NoteGenerator = (function () {
    // private

    // public
    return {
        matrix: function (width, range, density) {
            if (typeof (density) != 'number' || density < 0 || density > 1) {
                console.error("density should be a number within [0, 1], but " + density + " found.");
                return;
            }
            ret = [];
            for (let i = 0; i < width; i++) {
                temp = []
                for (let j = 0; j < range; j++) temp[j] = (Math.random() < density) ? 1 : 0;
                ret[i] = temp;
            }
            return ret;
        },

    }
})();