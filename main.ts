//% color="#8FBC8F" weight=21 icon="\uf001"
namespace music {

    export enum enMusic {
        Gurenge = 1,
    }



    //% blockId=music block="Music|%index"

    export function Music(index: enMusic): void {
        switch (index) {
            case enMusic.Gurenge: music.beginMelody( ["d:4", "d", "b", "a:2", "b:2", "d5", "b4", "a", "b:1", "b:1", ":1",
            "g:2", "a:2", "b:2", "d5", "b4", "a", "b:1", "b:1", ":1",
            "d:2", "d", "g:1", "g", "g:2", "d", "d", "g", "a", "g",
            "d5:4", "c5", "b4:2", "b:1", "a:2", "a:1", "g:2", "g:4", ":2",
            "g:4", "a:2", "b", "a", "a:4", ":0.5", "g:2", "a:4", "b:2", "d5", "b4:16", ":4",
            "d:4", "d", "b", "a:2", "b:2", "d5", "b4", "a", "b:1", "b:1", ":1",
            "g:2", "a:2", "b:2", "d5", "b4", "a", "b:1", "g:1", ":1",
            "g:2", "g", "g", "a", "b:4", "b:2", "g5:2", "gb:4", ":2",
            "d:4", "b4", "a:2", "g:2", "g:4", ":2", "g:4", "a:2", "b:2", "a:5", ":2", "d:2", "d:2", ":2", "e:4"
            ], MelodyOptions.Once); break;
        }
    }


}
