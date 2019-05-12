// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var url = 'https://rawgit.com/kimmobrunfeldt/progressbar.js/1.0.0/dist/progressbar.js';

$.getScript( url, function(){

    function ShowBars(name, couleur, pourcent) {
        var bar = new ProgressBar.Line(name, {
            strokeWidth: 2,
            easing: 'easeInOut',
            duration: 1400,
            color: couleur,
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {width: '100%', height: '100%', borderRadius:'5px'},
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#999',
                    position: 'absolute',
                    right: '0',
                    top: '10px',
                    padding: 0,
                    marginBottom: '0px',
                    transform: null
                },
                autoStyleContainer: false
            },
            from: {color: '#FFEA82'},
            to: {color: '#ED6A5A'},
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }

        });

        bar.animate(pourcent); // Number from 0.0 to 1.0
    }

    function ShowSemicircles (name, couleur, pourcent){

        var bar = new ProgressBar.SemiCircle(name, {
            strokeWidth: 6,
            color: '#FFEA82',
            trailColor: '#eee',
            trailWidth: 1,
            easing: 'easeInOut',
            duration: 1400,
            svgStyle: null,
            text: {
                value: '',
                alignToBottom: false
            },
            from: {color: couleur },
            to: {color: couleur },
            // Set default step function for all animate calls
            step: (state, bar) => {
                bar.path.setAttribute('stroke', state.color);
                var value = Math.round(bar.value() * 100);
                if (value === 0) {
                    bar.setText('');
                } else {
                    bar.setText(value+'%');
                }

                bar.text.style.color = state.color;
            }
        });
        bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
        bar.text.style.fontSize = '1.5rem';

        bar.animate(pourcent);  // Number from 0.0 to 1.0

    }



    /*$('a[href="#sign_up"]').click(function(){
  alert('Sign new href executed.');
}); */

    $('a[href="#skills"]').click(function(){
        //alert('MARCH BON DEU ');
        $( "svg" ).remove();

        ShowBars(document.getElementById('barPHP'), '#636392', 0.75);
        ShowBars(document.getElementById('barSymfony'),'#FFCF00', 0.70);
        ShowBars(document.getElementById('barHTML/CSS'),'#ff7400', 0.90);
        ShowBars(document.getElementById('barSQL'),'#0a86ff', 0.70);
        ShowBars(document.getElementById('barC#'),'#d02aff', 0.60);
        ShowBars(document.getElementById('barC++'),'#05ff0c', 0.55);
        ShowBars(document.getElementById('barC'),'#00ffec', 0.50);

        ShowBars(document.getElementById('hcPackOffice'),'#00459c',0.80);
        ShowBars(document.getElementById('hcPhpStorm'),'#be05c2',0.75);
        ShowBars(document.getElementById('hcVisual'),'#7100c2',0.60);
        ShowBars(document.getElementById('hcUnity3D'),'#9c0014',0.60);
    //console.log($('#skills')[0]);
    });
});
