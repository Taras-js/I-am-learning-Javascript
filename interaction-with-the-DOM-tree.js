// Создать div
const newDiv = document.createElement('div');
// Добавить к нему класс wrapper
 newDiv.classList.add('wrapper');
// Поместить его внутрь тэга body
document.body.appendChild(newDiv);
// Создать заголовок H1 "DOM (Document Object Model)"
const header = document.createElement('h1');
header.textContent = 'DOM (Document Object Model)';
// Добавить H1 перед DIV с классом wrapper
newDiv.insertAdjacentElement('beforebegin', header);
// Создать список <ul></ul>
// Добавить в него 3 элемента с текстом "один, два, три"
const ul = `
    <ul>
        <li>Один</li>
        <li>Два</li>
        <li>Три</li>
    </ul>`;


// Поместить список внутрь элемента с классом wrapper
newDiv.innerHTML = ul;

// =================================================
// Создать изображение
const img = document.createElement('img');
// Добавить следующие свойства к изображению
// 1. Добавить атрибут source
img.src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBMVExcVFRUYGBcYGBoaGhkaGhojGxwcGRocGh8cHyEbICsjIxwoHRoaJDUlKC0uMjIyGSE3PDcxOysxMi4BCwsLDw4PHRERHTEoIygxMTExMTEuMTExMTExMTExMTExMTEzMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAECBwj/xABKEAABAwIDBQYCBggEBAUFAQABAgMRACEEEjEFQVFhcQYTIoGRoTKxI0JSwdHwBxQzYnKCkuGistLxFUNzwhZTY9PiNIOTs+Mk/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEDAgQF/8QAKxEAAgIBAwQBAwQDAQAAAAAAAAECEQMSIVEEEzFBImFxkTKBobFSwfAU/9oADAMBAAIRAxEAPwA0lFSBFTBupA3VCZXCK7DdTpbroN0AQhFdBFWA2a2G6LGVwiugirAbroNUWKiAIrYRVgN10G6LGVwithFWO7rfd0WG5WyVvJVjJWu7osNyDJWZKnyVU22h/uHCwQHQklMiZjcOZ3Giwpknd1mSvKMV2nxrZ7suqSUL4gm02PEeLTSwr0Tsbtg4xhThCQpKykpTmgWBGvGZtSUrBphTLWZaH9ottM4RALgUpSpyoSLmNTwAHE8RXfZza6cUz3qW1oGcohUaiDII1F/WaLEXctaKak8qzypgQ5awpqlt3aPdIKWykvrSe6bJEqUJixIm4jqaXGe3eVlXfMKDyY8E5QpPh8UqFtSYE6a3pOSQDcU1zlqxlnQ7p8uNJ3bbtYpgoRhyhZIVmXEhOgEEGJHOm2kFDORXJpA2d2/dBSl5CVplMqAhQTNzAsTBndpzpga7aYApKi4pJA+EpJJ5CLfKkpINLDprg0rvfpAwt8rbqo5IAtvPiJHpXbPbjCkCUOgkmwSkgDcZkC/CjUgpjKUVwRQRvtjgt6nByLavmLVHtPtthG0gthbqjMJAKQI0KirQHkCbaUakGkPEVyU0lo/SCq8sIiDl8ZBB3SDqOkUO2f2xxKHFLWQ6ki7ZASB/CRpfrNLWg0s9E7uuS3SBtvtgt1OVKVMgphYSuZ8UyDAIMCPOgOH2itDoc7xYXmlSgblJMkc5uYNqNSHpPWiitZKUe0fbQLCU4SU71rWkTbRKQfc1WwPbZ5CYdQlapJkA6HQeERb5RT1oNJJh9v4hQBS+sjTd6XGtaxXajENjxPLJ4DIT52tQINpSSDCfDOomfzF6pQcxkRv461C2Wf2GrZfavEOkhLzgIvfLEekVfRtzEm/6yev0f+mktt3dlTHID7q2taiAN3IUWwtcDy3tnFGR+sm2tmrT/JQvbfa3FNlKW8TmOqjlaIG4Dwp8/KllCo3dedaVk+z86E2J0/Q37H7V4hbQLmJ7tQJHiyDNEHMLC1/aiydoYpUEPLIO9KjHtSBh8LnuoBIA3mP9qlbxy0yEKUhINgCR6RQ2+TSr2hoxvadbaw2t92d5C1QnkYEzp61cw22H1pC0POqSq4OdVIqENqzLMi8kk3JJN/Wa77w5QhKzYmBoL6m3OjfkP2HpO28Rch1y0g+IWjrUjPabEKAKXSRuIS2RbnlpDw4hPdZlEKVKpJidDMDSOFc4bEqZK0tklegP1eMxvIjXmaVvkLXB6EntNiftz/Ij8BUqe0+J3qR5pSPwpLxm2VFHgsbG48yDQvE7SdWCgrOUzmGk8ulFvkG48Dyz+kJSllALVvrKSoJPmDWts9tFqaLakNKC4BKCoEQQdc1javPIyjwxfnUfd3uTyp2+TF/Qv4hZIT9YJGVII0ElUepJqfZW0FtLStDi0wpJUEqICspmCNI1HnQ1l0lQ0y8DVxGHQokJUBNgSNetzRdCHHtd2taxOGW13aAtQACpUSjxJVaQmPhHHpQ/sX2qOF7xLiQ4leUjxEZSmbCZsQaWFNJLndJKlqEXSmT/AEjderWH7MY5w+HDPEcS0sD1UAKabCh6V+kpgasnyX/8aEbb/SO4sAYdvuoJzFUKJ0yxEQNZEcKFp7CbQsEsKg6lS2RfzXPqKsD9H201H4GkdXE++Wa18hbAk9pcQHVOBRStSpmxvM6Efag7qGYl4uLKiSTABJvEAAD0AHlTrh/0d4/6zjI5BZ+eS3vWK/R3jpsrDZebiyev7LWlUuA2Elt1wEEKIgRmuLERE8IrZZtmvHEC3rGlOrX6NsYDKnWlcs6v9NQYjsHtIE5UM5bwA6NP5gKNLHsKKmkpk3Ji4P3RXHfLtAtqIHvTQvsJjwknuhm3BLjRHn4poW92U2giZw7p/hQoj1SCKKfsCikOi+nHieNcYlRJCsxI0gbq6fw7yFBDja0qOiVJIJ++tNoU0qSb8DunprWR0yZlAkZ1EAjXgN+sVG+GkmGlOK5riPIAA0Z2QUOXU0gFNgq1+XH/AHoVtJsZzmLQi0IBtQmaa2splAnxW6GuVKSDAMnjVhRy6FMHlINTFDCpOWBayT+I486LM0DlrT+SK2lW5QkVO4ylOgEcxWCD9kDrH5FPUI0gDcTXHr71IWIuFeUk+8VmQ8PYUkxl3FAzobWlP55Vp8hUzI3Hfcm1zp0qxh8UogFaDlH1tPepDjEqEfDMQeXymTvpWb2BxbSBEXtF/P1rAr5UV7gZoVPImLTEDnv9d8XrbVcQjKGxB+tz4a240rBoqIBOnkTb+1WEtEAjL/NA/PTpVR5aidDbdG75V2txaUEQf7T8qNzKZbYCRIUZEjVRnz3CpC2CbAqtqm432O/WKDALVcSTaLazzNEmUOhJ+HS6R6aUNNDtki0p6xEixM/LlU6cKlUR4Rwt8hQvF4daSCN824eQ3fhVvZjWVxJLhsfCQDfdv6xRdBbIMasNkoGkGDMSdN26osKJUSbxvnWRpb58qalYRtRClISrd4ok+1bcWwE2amNYAypuJuB8qLNaL9i6lWbQeHiTrxnjUDyoPBRABtuN5A4RR3FP5gQloaeERrB6kaVTQ+mYKAdSYi0adN96EjLiga1h7HfuMSd+ulEtlbAfxLkNJ+EXURCQDz06Dfupv7K9iC6UuYhGRNiGxIUrmZ+FPXxHdFlV6CkssJCEpT4dEJEJH9+Zkmqxh7ZFy4EXYP6NkRmdDjnHxJbb8ozLPtR5GwcIzAbwuHKhvUlTl/4nFE0SxGNW5YmBwGlcotoK3S4M2UnNp4hA8IabG4JbI8gJqtiNq4qQnPciYCUGBzsYrvbWFC1BSlq0iARb2qPC5EAjQe5PM1tMDbeJxav+YfNKB/21YCMR9Z8eif8ATVHEbTSnS54Chz2NcO8J+dO2KgzjMU+hIhxub/FqfIARQ1XaTEp+o0v+G3zJqm00lV1FRos3s7KjvC2EIAKsy5mBejUxaUZgu1aVud2ttSPDMwNbWsZ324xuqfG7cUCG2UlbiphNtPtHQAdfUUvYNOYOYhwQm5Aj6qbQPMR/LRrs8UNtkqu474lwJI+yjoB+bVVvTBP2yK+U2vS/sxLW0Fm7rTXRJX66exNd/qOOF/1xvzY//pRrCoSUE5dDN6geejT0qOp8laXAD2hi8Y0EpcQziG1Ta6bjdChlmNL7jQTEOYRxUKC8G6dEuiWVHgFCY8j5UxbVXnaWBcp8aeqbx5pkedDGsriClYSpJsQQCCPOsy+XkpB6fAFxWDebOVxAEyUqBlCtIykWI96EYvYTJVOZxBm4Am548KZ1MLw6SGh3rBMrwyybfvNKN0qHD04ULxeEQlBxWGJWyqyzB7xk/ZcSNDNgQAOMVGUHHdHRGalswfhtiMgXUqYnxER6CuP+CtJBUtxJj7PhPGN82qptTaS1QUkkbzETN/IfhVNvErWgpn6xVE6yIrNMHKPAVwWFwy80FYjeoiNNd2/lQzaGAcaJtKT9dIt58K1szE92sqUDEEEaG/8Aer//ABgZAQnxTpNuVG6FcWtwAl0jS/lU3ecZnr/ejuDxLDgJcQkKG+JBmb2GtcOP4SboAPQ07M0uSugAKOZRKjokaC9rUSVs9lKUgKC3AZUomEpkCExxHik8RpvLv2Z2J3a1OPFp9GVSEgN5YIVEggfDAUPOou0nZwOLScO2y0gJulSSSVkyVTGkZfQ0VG6tGk3V6WIuKcieRgq1v+MD3qkwUmcpJ420GvSK9Wf2PhlMBJYQXg3AcKl5e8yxmidM14jlQvYXZlCFrOKQ24giyWlOJ8UzJFhHKio+bQO78MRGkoAmJ6ggD251olAuY10v+Ap02v2YKnyphtpLXhhKluZrAZt51MnWrm3ezOFU2f1bD5XcwguOKyxv+ub+VPStvkgt09mICMbC4hMcwCPzpXb2LAE2PXdO6nnYPZXChv8A/wBLP0maxaWcuWBHxK1mfUUNwnZUuOgYhsIZ8X7JwZtPD8UzeJmlpW/yRm3Xh7i2wpJSCYB9vLhWl4rIIChBud5MaXN46Uxbf7IthaRhWnVoyyouOoBzSbDS0RerO2uyGES3mYD7roj6NS0BN9STkEx1pdvxut/qDb32f4FLZ+LVnIAOQ8ZsTz1m1qIYULcfS02kqkkxIhNpJJNoCQT5mmns/wBmGVtS62804CYQ2kqEbiSlKhJM7652LsnEstvuKwbocKQEAd38MyoSIMmE7hYVuOPcNaivYC2lsgNrDaXkuvLIhtsKUbnjlG4H0N+Dj2U7KNsAOPZVOi8WyNxfopfPRO6SMxHdncQzhsxQw848onvHFd038VyEFxweGwFrmBuAAYc2IdElhxCRokqZPmSlwj3quiMXsSUpSW7LeL2kYyosOO81WYZUs1NgtnOqMltXTM19zlEkpWiwYdPmz97lAEeFwQFzXG0HW0jWqm1MbipARg3iOIUx/wC9QJ1eJVIXhXUyLz3J/wArpNCQHO0dpySR0FDVYgq1NTPYJ0j/AOndnd4SfkTXeGwzokLYdAywIaWYMgzpwB9aYimscKJYDY5cIkxa9X8I2yjxLbdnmy7/AKa7xXaFlIhsL/8AxOD/ALa0Ky0pLOHTIbzL4qv/ALUsdptpvvZWRILigOUTA8pv5Gsx+002UEuFcmfo3BbdqIqrsBLrr633EL8KYQMqtVWkW3Jzf1U4R1SSMTnpi3wWe0r6Gm2WgJSVIkHe22RE9TJ/lNEE7QaSTncQ3xnX0H30k7Q2ml15TrqwlIOVIUYJAMAJEaRJm3xGquL2vhSTLipJ1yk676stE5NydJeCL7kIpRVt7s9Hw+1mVSlvEtqJ3HOD/lI965dWpJGYaiQZBBHIg15vhdqYNCwpLjyo4Mj/AN2m/BdpUYloYVrDYlawrMhZQlIRrMwVeGLXi8Viax18Xuaj3tXySoInGeK4iN1AEOltakbgSB0Bt7RRjD7DxRP7Mg8/zFY92RxC1lRhMxPiSZIAE2PIVLS+C6kkVEOqNUMY65hlnFs6j9s2fgdb0MjSQPUUy4fse9vcT6n/AE1K92OzpUhbvhUClQCTJBEG5V91PRINcRT7T9lPB+t4IEtLGdbVyW5uSneUTu1T00UVtFKcuUxqOZ68K9ywGBS0hCElXgEBW/2qljezeCckrbylRkls5b/ay3TPlelPD7Q4ZV4keNpbUROQCLHh0io3cNv8KRx3eh6U79q+yhwyFOIcLjMiTCc6J8IzJ0NyBI46DeuNZcpKpUd0gj5aiudrT5LpJq0DmW982iBz/N6g7k8FVfdbQZixPkOWovWdyNyh7Ug0hnC7TfaHgXHiCt98g8IJ+xM20vejmzu2boSEONpUv7RMEg/w2PDQUm4fFkeICBF7A/d0qZjFFwFKvCDvgT1AjQVzq0FsfGu0bywSjBLcAMEtqUb+TZiuzt90a4B8ea/vapQ2HtVeHQ58DkxEgQI63m4sKjc7W4gkmUpHBKEwI3aTVVK/Rq9vI4/+Jh9bCPJ8vxSK1/4nZ7vvC06EZsswjXzUD7Vf7PtYh5sOvpTh2iJuXAtQ5JChAPO/I0Ywq2kHwlw83FKV/mMDyFVhicvRmWRR9lTZLS3xmDTradynUpTPQZir2iirWw2/rKKukAfjW/1oTdU+YrpzabYtp1IA96r2VwT7z5JWtnMp0aSet/8ANNWUJCdIT/CAKCu7Yb3uJHIBR+VRDa7X2lnoEj53raxPgw8q5GAv8x6zWB7n7GgH/FEGwSrzV+FROuqVvgcBWu0YeUYncelPxLj0qo5jWSY7vMf4U0HSzO+rbBCeFPtpB3GwqnLAhPlJgVMhFB39qpRc5R1NDMT2nIshM8zYe9/ahYpPwJ5YryNwQBwnnUGIQT8TiUjpFKQ2w8vVzKP3bf3q3h8ewm8lw7zc+5t5a1rsteTHeiwyEo3LJ/hT/euXCofChSjzIH40HxW206Ax/CIHqR/21SG1HZ8CsvMa+/3AVSOFsjPqYrZfwGX14k2yNDrCj+fKq4wDhMqUj+VCR80ih2HcWpQClqN95NGGLdapo08fgg8mrzf5OkMlIIzgSIm5UOg0nz9dK7xuQtKTmXATbLAPhFotyqdjDFVzbr+FVNs7Zw2EIS5mUtQkJSnMSPkN+p3GptpOxrdUkeM7b7OmJZDmXUIUQSDviABrwHrTt+jnBYdxgA4JAWgJQta20+JQA8QzCTNj1mu3tvIVZrBOKEmCoHffRKVcTvrbO0dqlORpnukzPhQkG/EuqqjxR2lFUKPUzpxmxzYwAGjaB0Smun8Y00PpHG2x++tKfwpJc2dtNwHOuZ/8x0kf0IEe9UmuwCyZW+gE65Ef3ApdvkO8l7G/F9scA3/z0rP/AKaVK9wI96XsR27bLxWg4lSQIDaUtJRb6y1KClA+aRbfv0z2Ew4+N1xXTKB8jVprspgEatlX8S1fIECn2kHfQOx36SFAw2ymOKlnXoAPzNa2b2g2tiz9E22hP28hj1UTPkKNp2dgURlabB45QfnVlvaiB4UkW3CPlW44+DE8+kkweBxWUd9iJVvypAHtU5wwGpJPWok7Trl/aDYBUpQSBqSYHvRLHIMeeLJThQ40oFIUM0lJAIUACCkg2MhR9a8g2ghKHXEgylLiwlP7oUYJ8hXrextqsuIV3biFkEyAoEjmRrFBsK4lzDusqaaLiFPJS6tKSUqUpSgoSndmEX+rXn5472z18E/jpo82BB6X3XFcZAb28o/Gm3CdnXQ6jvS041mHeAeFWWZMQAZPWjR7M7K+w6OXeO/6653FLxJF02/KaHQdncDEfqWFjh3DUf5a6HZ7BDTBYbyZaHyTRIJrsA1ukYBbfZ7BJsMHhh/9lr/TQzafZ3Zzq1MFhppaQFIWhCES4pKoHgAKikBK4324EU0LUEgqUYAEk8qUO0wbdaLqVLhLgU6EJStSIQEpJRKVFCmzMpMgwdAYNKCwYxi3lWxawh1BKVp8OWU2zpm2VUZhyNXQ4iLPBXIKR+FKfbfHJV3zrbnwnDgFKUkgrQUKjNOUgojjqN9JSdtvHLmeUZiQtCFAWJPxIPCBV+5VKiHbcrdnrD61HQqjr+FRNtMQpTjmUgxlElZOWRbgbCTa/KvPuzu2ip5ptwpCVrSjM2nu1pK5As0UIUkHLOZJkTEGKLbc7Thh1SGW21KSE5i6tShmVokJJGliVTbNyk07kXG1sTeOSko1YwLxqU2bE8yB8jPzrE7Te+0B/Kn7hShge27zaiss4dd8oBLsSRM/tSIHSu8LtvGPBS0YdhQC8s5nEibTYvi19wIprPHgT6fJ6aG5W0HDrlP8v4Gtt4xU3gdJ/GgvZHazeLDyXElpTaQULbMoUpRICSFgqExqFVBjn8qM7ilEaASSVE6AA76vjcJptejkyvJjko+W+A9itsZf+YmOZAPpNUXu0TX1nldEpPzUQPQ0EwDmHgqxDS3FHRtLmRtI5lIzqVzBA5UwMbSZbwysQzg2WyHUtCyFRKc2ZSigL0EDxa1CWeKfxR1Q6ebXydFTD7aYWfo2nXVcjJ/wBRojh3MUv9ns94DitLg9C4lAot2bxb+LbadL3dIJUlaUrXlKkKsBmURlUki3I3pQ2b2jf/Wwh5Qk4kt92hKARDhRkMCVJNhmBkEA3rD6iXpGv/LH22HWNk41wjvGUo/dU60APJLhJ8x5USGwcQkZsrQGnidA9PDFMG0GsIlMFCgZjxLWYGt8yju40v7cxjDMJUStwrnuEKBX3YkJzlITlSdfGoW0k2KWefhf0OXS4/Mv7A2PeS0pCXkKbCzCFkoU0v8AgcQSmeRg8quMMpkQsxQ7a6l4txDmJIKEfs2EfskeX1iBvOvIWqx3oQkkEARobC3y616GJT0/M8jO8alWILYNlWbN9UbyRFHMPi8OgftElXM/jXmito47FSMI0pSQPjKCf6RpF9b9KXNtYnaTCiH8xG8KRA8xCSOvOoZM+O6t/sXxdFncdWy+57Vi9pEb45UvbSfKs7hWhCAEgqy/SjhCjoLeqjxpO7N9pypBCpKQNNSg7oP2DpyqDGYpx1aon4TIGgSLx6gedV045x28EorLjm/THRHallIIKyq4vFz4QJtbUGqeI7aoGiVHzilf9VbCiLmw1PM8KwutJ0CR5X/GqJpLZGHjUnbth5ztm4r4Giedz8hVdfaXGK0ShPX/AHoG5tAbgTUZx6tyR61hzKxwx4DKtq4xWriR0BP3VA4++r48Qr+VIHvNCVYxzkPL+9QLeWdVH0FZcy0cceAi6lJPiW4ud5X00qFklDngUrcQZv61BhVLUqSrwjXSK7Uq5Nax35M5P8Q+jbS0WWM0b9DQvamIdxRhNkgSAfh/iOk7wOk9aiQVG/w7zyGtEHn+7YU4Eg8piVQCRI3JTw3I4man1WVpUinR9PFy1P0L7b7+FeTmISZ8Kxp7ap4gjSnrsAHcQ5iyDP7I3IEmFjeQAYSKTk5sTh1qUACJKQNPCJKr6XUkW1zHWBHoP6JVA4UrAAKiMx4lMpk/0/ma89y1RqR6enTK4hhexMQdAOveN29FE1Te7P4mT9ET/P8A/Kmhtype8qXaRXuMJpRXdJI7WY0/Cw0Ouc/eKvYTtFilDx4Zu+8LUPYg1qzNM47abcaS6jC94lKikOLBIGYSQlPsTHSlHbrPegjMRmSQcpjwn6sj6vLQ0J7ZuJf2wsOIAPcJCRJMKSjPIiLxmjmRVTFIfZV4FGOGqfQ6eVdOJqt0c2ZO9nuTbJ2aCl7DOKyl5tIQtZhIU2tK0dLAgzaCTxhRxjBaWULSUqSYKVCCIP8ApVTy1tAKV3a0y6AJSItMQJURe4sNKsYjZT6RC2X0p0CVIzpHRKgpI8hW8mKMt01+5LHmlHaSb+wibASTiWYg5XEKJPBCpUegCZrrtKCMQoxZaGiOcISkn+pJ9KbG8E0gmUKSqCkkMobIChBEhkRIJFtxNSYnB4YthLiJgEBThMgHcCnIY3xJEyYkmc9h6aTV/c0+pSnbTquDz3LbzJ9jyraQCpIImSfefxp1RszCE/smzvst48p/bUZ2XsZlJBRhiFbikqCpI3KcLi08fCRSXTT/AOYS67El7/AH2Hhxh2QkiHFqKnBvTuCDzSJkblLUNxqd9jvHEr8RypISmAUidVQRrzpjdaZZutDLZ/8AUdST6Zh8qG4ztIymwdR0QCB6pTJ9a7ceOEY6XR5WTNlnk1wT+n2KqMM4CM+HQ4jeI7tfktsAeSknqKsB5hoLShp0JXGZp3uXGzlMjR1KpB0MDnNCMTttpRJLqjyhce4qmvazPFZ6J/E1ieHA35/k6IdR1SVNX90S7YK3lIt3aEJKUNtLShCZVmJADarlRkmSZ30QG2XwQoBkOQAXSy0XjAj9olKFAxv1oKdsM/ZWfJI++uBtdskShQTviCfmKz28CN97qX6r8DZs7EYlbWVT7gRuSlWWTMlRWnx3P71SNsIbEJSlI3gAC53mNTVIbWbyAtzBG+3LT2qsraBgV0whCP6UcGXJlm6k2GF4kJBk2FzS7iMap9eQJsbkcQLgHgN5rnHbQkEeZ6Chq8QUtKyEh1IQ9M2KQq6OgBSqN4turn6rLpjpXs7Og6dOWqS8FjEdrVJ8Da1kAR4VqbT5d2Qr38hVrAdpnnkrSs5mkCVIecKm7mAEuLlxCrwCVKGoIpV220kOFaBCXIWkcAsBUeRJHlV/Z2VICVfs2z3jpEeJceFvyEJ6qPCvNPaOseyMO8l5qe7WSCk/Egj42lDiN242ItTPhUtpQVJ0PiJ+QHIDTqaWsNilYlLqV/E4Z/mEls+RHdzvC0DdV/Yz0sIKjawA4q+GPaurp51aOPqcd1I4xThWtSjblUBiunFyVRxrSGFq0TPlXTbZxUl5OSOFclMVZGFKfiUE8iZPoK39GNxV1MD0FPRJj1RRXS2TYCTwqYYePjMfui6vwFTIWtQhKTHBIgfnrWlMkfEpKeWp9BT0JbsNcnskcToNBuSOfHiawoCbq9K0t8Aw2gyRqbmBwFV3ASZUQDzN/RMkelPuRSpGe3Js6fxUiIsYHkTHyqLamMUpJbkRkChJ+soqQY/kOnKq+MUE5YJuvfAsAd1+PGrie6DTilgyttIQYiFocEwYsMihJgxIvcxwZ56pHo9PDREHjaGRCUI3KTn5hJzBP9UqPOK9S/RajJhCdxcXHRK1fjXkjWGRHiUpsGMqiMyCb2zJ09DXsvYNSBgWU528wzzCwZPeLvxuBblFRRdjGlU1uetRNOJOh8xcecV3NaMgJprN6fa/MVIEkRJGu4+wtJqsrJBkp6iAR1NqkUQQCkA2+LiDzO7pUiog9rsR3W1VOfZazDqGVBP+IChuy+07mZCXEJcBITaxuY6GrH6SQRjJkeJlIJk2lShw5UubOT4wdYzH+lJV91WjKSqiUoxadjH2SeSvEE5ryVGx1zhQHmbV6xg8S8xhXUOFwrcbUUKukthOFbCQN+YRc7lZq+fWHVJIKVFJ4pJB9qONdoscgDJi3kx/6it/XXXj5U8mTVFJ+r/kUMeltr2ex4LH40YtSHHEqRnYDibwM7jwAQJ+sMoP/S51zisWQ1iHEOkoS4e7WUs5iGyovrQko8baB8KNVFowYUDXlOG7c7TSb4lStPjQg+d0zbrW2+2eJBJLWEV40rJOFZkrTOVRIAJUJMK1uakUPTNoYt1sO5zKkfSqWW8M4hLSk4gNhAbQlUF1pCCFZlXEEEkjzztO8pvaWKCCWyFgwgxBypkW3A7q6Y7fupJP6rhPGtLq4bUCtaVZkrOVQkhUquDczS7tvajmIxDmIVCVuKzEJmBYCBPStwnplZOePVFxCrri3iBlzLJAgC6id4jjRrDdhH1CVrQ3yuSPS1JuExi0OBWci8GDCgCNQRejTSO8nMtZPNSj8zXbDIp71Z52XHLFsnS+1jAnsUyn43VHoAPnNbd2Rs9kSsE/xKPyFIm1sGps5pKkzGuh51UZeULpJ6aj0rL6iEXWk0uknON6/wDQ3bRxzJ8LTCEj7RF6DuX/ALVFhsWFWVY+xqwoVvUpq0Y0ODpkuyV+AidFK+c1266TaYHKqeDN1D977hUpNOEvjQpw+bZ0pNgkarUE+pqpiHzmDhBhS1JSmPCW4KV36KSN+/SBVgr+kaH76Sf6h/eoMMypbKVuA90lKm0Xgla1Ewj7Rk33CL1x55XI9Dpo1C+SHEYdxKEFSFAJAyqMxoJgHgb9VCosSFBpBE5c/vlBvzufU0d2ltdtWEYaAlSHFErUJEpTlSLXygC8zME7yAKCFFIAbS4iZhCjOnK49N1SVFtyLZjmVxX8Kj/QO8H+JIpj2XhpATGi15RuHjPi6xA8zQnBDDlSz9K06htZyKAKTlbUSnQEEgb6MMLhNlHMSbJ16SdNd01XBtIln3iWH8LkJCUiPtKI+8wNOFV3XW/rvTyRMfh7VPs/s689KvAhIMFTq1E2/gAokjYmAaP0+OBVvS0EJPS2ZUV3ObS2VHlqML3dv6IAd4yPhbWrmZA9dK5RjFE5UJbB3BIzq/wA+4phVtPYzfwYdb6uK8yv/wBhA9BUiO36kjLh8K20nQSR/lSEgetSll5ZeOK/0xb+4Jw+xMc7oy8R+8A2P8ZFvKimG7BYmJcUy2OKlKWR1AATVV7tVjnZnEIaHBCRPyKh60HxTzTg+nxLzit4KrD+vN9wFSeZfcvHFP6IIbV2Ph2wUq2i2T9htsq9kLIHnFLDisqiM0gaHSR03dKO4Z/BNX7oOaHM4M/lAlI4zApW2qgJdUU/AolSOEEzHlp5VN5eEVjh5ZmMdlQIMhMf3q+raADDbZTJzqBUTYIIsBwu4onjFCN0VPhHEnwr0NieB3H88eVSbt2WSpUXG2H2SkIUcq5VlBkFKYJKk6SAYJ/dPCnRnZqQyhSrEoBIiPivaRAF9/rSxs/Cd460jMCSRmibJzZlKvwKlkdRxt6WvFNyQQkgaXSd2kRakzSFdOyEElbYjmmJnePCZrRYfFg69H/Uc/GjBxTcHuxkIOs2N9D+ZHtXLW1oELJB4ZSbbrxekMvMYpJE+EkHXKbdJF+tSubQIKUgZjxJSIHK2vK1CsUsJEKCiZskEn2m9WkqUpIiUzEkkWHKTrSGDu0ez3XMQ1iEJzBtJStE+IjxRqRmT4jI3i0GgOMcw2GSVowaw5uWoOhKTP71uUc4p5VkCSVueECTJSNN5itu7SaSMxcTpASUpBjnImOQFUjNxJuCkeRKwQUqWVJUDcJKkhSZ+qQoiY0kTPKtO4J5N1NuJHHKqN2/+9P3aHH7LcTDqM6txbKQpPRQAHPxTXn2JdShZLC1oTNgV+LzKEpFGpPyhaWvDI0uAbxYb+VbKjy379N+8V0nar+neKUOC/F/mmtt7SUDKkNqH/SbB9k0fEe/Bzl5D1HW16zuz9k+ms33VfbxrC7dw2g8VFUH+gproqYE/QtHcmC/rxP0vyopcit8FBLKiQAlRJiAASdYtAve0US7xTa8ih4kwFAXgxdNt40PAyKic2i4kBLRQzaJbQsL4x3iipccgryqfYu1G2h3biApJ+uhJS4n1EKTykHnuqmKSi92Rzwco7K/oWMflCD3hCQoRk1XyOXdB3mKWAPz/vTTiGsIq4dTB42PmDBmq6sDhP8AzAf5hHter5MWt2mvyQw5tCpp/gA25+gq0xiwEwSZHEff+NFBhsIN6D1UT99cl/DoH1T+6kAn8B1rEcLhvqRuWdT20tlPDK+JUEAm08gPxFSF0VVxWNzmYAAslI0SNY9STO8k1X7/AJUu4lsN4XJ2WcS99IFD6oEdUmfvpqxiAQp5xwKW4hQw6RZCELBGe2+CJPUcKTT8M0WwWKKmSEpzOJERNym8RxIvbh0Nc8pW2zqjHSkiFsgtltyxCygkAD4xnbVpuUlYOll1QY7xLmVJU2pMhUSCI+IH00NW9lBbneyFEONrGa8FaIdAnTNDZ53qfaWZbiVIAKn2W1LMTBKQhRHMqSo+dIZPgNpOrZcDmVYshK1Dxi8GDuGTNpVY7XiMiiOf5vUe0nEoQGkHTU8VHX0HzPGqDTSzoknyrUZOPgUoKXksO45StTPIqJHvXCcRzjoBHvUrezHVbkjqR8hNTt7Hv4legj50nNvywUEvCKTmIkRJPOAK5StMc/KjDOyWv3jBE5jxt9XnFF8Ds1Agpbg8coj1ismqFZlDivgCtNwIHrUwwb6on/EQflNN7eBMqJsBvvEa9LcflUyMIVbx4TqYkHjYz/vQFCcnAO6BSP6bfI1t3ZTygAe7I/dBkacgZp4awiTHim0zqbTNtfMTrWlYInQ678gItHPkLUwEP/gbg1WPepWtgLUfj4fV49TTecI7qoE7o7skeoF6jOCUo+EG+kWgxzikMrbAwJw4VCVX+JaRf2+VMicGD4gfEYkr09/TWgYDjZOaQRvIkHnKCfbjTDgn8zYCxJ1gHcbQRwgkEGgDb+ERBnMYuct9OIGo97VE42kGAlJHHjVttaFE+IEaAQRBFiLcxVLEqSFESRyKh7Zkm3n7zQBCSYgmRvKiI8zJPlpUyVwAE5Ujf4B7W971plYCbhSY3BS/lUOOKVtiCozEQpe83unl5Uh0Udq4hMyQfCbQUi/Gw1oDtHELWN8njNHnEISkWUSOYj2t7nrVB1Spga/n3oChZcw5OsHiL1wMIj7JHGCfvpkQ2DMyT+fSpV4UDdYfvDlaxosKFN7BoGhVPQR+fOoDhFTaDTk0wknLGbjvj5Ru1964xOzlC/dkC8ep+zbdHlRYqE79Wc+wfL+1aUlQ1SoRxB++mpOz5+1F9dPeawbMP2gOqvwVTsKFLvKwmmfE7KVa4I6z6QYrgbBBNkG/7yPuosKFmBWRTMez24Nq/iJMcNbCumOy5VqCByM/P7qLChXy1gpq/wDCZJhLiL6S5HzFRr7IOgSXGwOoJ9Ab0WFMWguszUwo7LrOi/8ABf8AzVIvsvGrl7fVjXqaLCmLiHIqRl4oUFJMUwp7Mt694SOoH3VYR2aai87vr3uY9taLCmUMJttoHMpHimSRoTlUmTBE+FShdNpN6zEbU73K2ygNoSnICZJCSSqJJJNyfWjeG7MM3JFgYgJzGI1uo/2mrTWwWkwEuJE7gkc4PXW9FhpAeFwaAkZSnMDdShqTzJ6mOdXG8KE6yItIuOG6Zo6NmpT4Q4M2vi8M+quFTHDPBITmBTpGVrmdVA0gAYSVCEwowJkGbEmxAFt2vGukYF5UJukmYjLcCCbkHiN41pkw6EJuoEG1k5d8DXKdxn2rosgZcgMaCbmJGog2Ij0rVABU7LdyyUSeFvFxmdDXbWAkJmytSOEiRIJA03UeZQomyGxefFAPPcKgbYSk90vIohCfpFLkkCQJUMvisSbfW50CBpBQlRJFxBIiJMC8GAOPnXCQE709D13Sr8fKj7+EbWkwhtRAkeIxIvEhdutcuYZMhIAFvEJkEK0gkm4I3celMAOolafiCiCTGY7+qT865aQYJKUkBRt9INPtCNfOjriBlIDaSQLQlM+RjWqiGCZCkkgxYIuDuOkT+A6UABsSlWosmIgpCtd4MZt+6Yit4dpkQqw4lRSRI1tJI9BpRgNWltABNxKB5Vji1DwltAneRqbb0EkeetIAQO7WVJAQmTKSmQSLSCDIvcdDV1hxxRISgQmATJ9Iy677102lyTCUx9kqMSN4uTHW9TusA5StCQcwgpCpB6gTpSGVlOFB/ZkcSPncdN9VC/G9St8hIgg3Ghg2i4tR1hwyoEKEH6wIPkcsKEXnyNxVdboSYBHE+Lebn61AEKglQAWAANfjj5VE+6jL4HM06ZcxvuuPnWVlIZV/VyoQVnNreIHpPpJqNOAV9Yk+eX5Jk6cqysoGcJ2coHxTBFoMqJ4CI9asM7NSkeNtZMWkxzBtNZWUASDZ6MuYpA4gk/PMPWDYHWrWE2Y2U5oVmEGAhUGJtczHlWVlAELuEIkhB5iCKlZw6CklQBPAgGOZJSR5RW6ygCxhpIhLTQFxIy77XtE34cq4KFBMKbCxfRSRrwsfkK1WUAXcPslCiCW0gWuFoPUEZTO+9cbT2c5JLbsJIiEwIHO45z+RWVlAA5jCqSJWkG5scoOn7xB8rVLhkL4KA5InmbyN1vM9aysoAnXhxlJCnIsfgGpgCJXeTaByqJ3ZiYJUsgQSAqxkiYgkgDrWVlAG04LDpyhRKlnckDXnCvYcd9c/qrExCuBTaxkyPEOulZWUAWGwUgZUKBMEkKIOmnlaemlDsWcypKlDjcmfMD0rKygCRtbeQKBUpOkhYBE8RE/P0qUKkpCLJyn4lC6pO/LOkVlZQIzC4pCRC0IVKrGJPrEe1SYLEIKh3bZyjPmPgJzZgRFxA+If01uspiLhxKiPgIGhCiRI4WOlRNNp8RWDEzBJt0g1lZTEdMYpsneRAIKS4B5jN+ZqINtJTkblEzBuYmT/AMwHedKysoAiW42UiCCTY5SnKCNdU20I05VtUlMEkD+WeRBgX5GsrKQzTanBIJHxGLC4N5jNrJg9JrffjTvFJUoGBC92sEEib6e1ZWUAdIJEkfFaYzCTxgpNR4fHlQPeAIIVlheXWYF8kEG0dRvrVZQBacNvCETvFpjkRHzqv3+SxWTvEturMfxNqg/PjWVlNAf/2Q=='
// 2. Добавить атрибут width со значением 240
img.width = 240;
// 3. Добавить класс super
img.classList.add('super');
// 4. Добавить свойство alt со значением "Super Man"
img.alt = 'Super Man';
// Поместить изображение внутрь элемента с классом wrapper
newDiv.appendChild(img);
// Используя HTML строку, создать DIV с классом 'pDiv' + c 2-мя параграфами
const pDiv = `
    <div class='pDiv'>
        <p>1 параграф</p>
        <p>2 параграф</p>
    </div>`;

// Поместить этот DIV до элемента <ul></ul>
const insertDiv = document.querySelector('ul');

insertDiv.insertAdjacentHTML('beforebegin', pDiv)
// Добавить для 2-го параграфа класс text
const addClass = document.querySelectorAll('p');
addClass[1].classList.add('text');
// Удалить 1-й параграф
addClass[0].remove();
// Создать функцию generateAutoCard,
// которая принимает 3 аргумента: brand, color, year

// Функция должна возвращать разметку HTML:
// <div class="autoCard">
//   <h2>BRAND YEAR</h2>
//   <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
// </div>

// Создать новый DIV с классом autos
const autos = document.createElement('div');
autos.classList.add('autos');
// Создать 3 карточки авто, используя функцию generateAutoCard
const carsList = [
    {brand: 'Tesla', year: 2015, color: 'Красный'},
    {brand: 'Lexus', year: 2016, color: 'Серебристый'},
    {brand: 'Nissan', year: 2012, color: 'Черный'},
]
function generateAutoCard (brand, year, color) {
    const currentData = new Date();
    const currentYear = currentData.getFullYear();
        return ` 
    <div class="autoCard">
        <h2>BRAND YEAR</h2>
            <p>Автомобиль ${brand} - ${year} года - цвет ${color}. 
            Возраст авто - ${currentYear - year} лет.</p>
            <button class='btn'>Удалить</button>
    </div>`
}
// Поместить эти 3 карточки внутрь DIV с классом autos
const innerAutos = carsList.map(car => {
    return generateAutoCard(car.brand, car.year, car.color);
}).join(' ');
autos.innerHTML = innerAutos;
// Поместить DIV c классом autos на страницу DOM - до DIV с классом wrapper
newDiv.insertAdjacentElement('beforebegin', autos)
// Добавить кнопку Удалить на каждую карточку авто

// При клике на кнопку - удалять карточку из структуры DOM
// 1. Выбрать все кнопки
const button = document.querySelectorAll('.btn');
// 2. Создать функцию удаления
function deleteButton (e) {
    const currentButton = e.currentTarget;
    return currentButton.closest('.autoCard').remove();

}
// 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку
button.forEach(btn => btn.addEventListener('click', deleteButton));