// Interactivity + Noodling
  // A. Header Line Interaction

/*=============== A. Interactive Header Lines =================== */
(function() {
  console.log('hi');
  // Target container, append lines, create array of lines.
  var stackOfLines = document.getElementById('pyramid');
  createLines(stackOfLines, 7);
  var lines = Array.prototype.slice.call(stackOfLines.children);

  // set the line width (%) and how much to increment each line by.
  var lineWidth = 50;
  var widthIncrement = lineWidth / lines.length;

  // loop through the lines and increment each suceeding line.
  for(var i = 0; i < lines.length; i++) {
    lines[i].style.width = lineWidth + "%";
    lineWidth -= widthIncrement;
  }

  /* for each line, set the width it should return to,
  length of the line before it, and format it to be animated */
  lines.forEach(function(line, idx) {
    var currentWidth = removePercentage(line.style.width);
    var previousWidth = lines[lines.length - (idx + 1)].style.width;
    var newWidthToAnimate = removePercentage(previousWidth);

    line.addEventListener('mouseover', function() {
      line.style.width = newWidthToAnimate + "%";
    });

    line.addEventListener('mouseleave', function() {
      setTimeout(function() {
        line.style.width = currentWidth + "%";
      }, 4000);
    });
  });

  // helper to work with string'd style values.
  function removePercentage(string) {
    string = string.split('%').slice(0, 1)[0];
    return string;
  }

  function createLines(parent, numLines) {
    for (var i = 0; i < numLines; i++) {
      var line = document.createElement('div');
      line.classList.add('line');
      parent.appendChild(line);
    }
  }
})();


//

// I wish I could do this with CSS

  // var projects = document.getElementById( 'projects' );
  //
  // function resize() {
  //
  //   var baseWidth = 200;
  //   var baseHeight = 150;
  //
  //   var fullWidth = projects.clientWidth;
  //   var width = ( fullWidth / ( Math.ceil( fullWidth / baseWidth ) * baseWidth ) ) * baseWidth;
  //   var height = ( width / baseWidth ) * baseHeight;
  //
  //   for ( var i = 0; i < projects.children.length; i ++ ) {
  //
  //     var child = projects.children[ i ];
  //
  //     child.style.width = width + 'px';
  //     child.style.height = height + 'px';
  //
  //   }
  //
  // }
  //
  // window.addEventListener( 'resize', resize, false );
  // resize();
