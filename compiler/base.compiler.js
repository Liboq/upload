import path from 'path';
import compileCommand from '@builder.io/mitosis-cli/dist/commands/compile.js';
async function compileMitosisComponent(filepath) {
    const file = path.parse(filepath);
    const outFile = `${outPath}/${file.dir}/${file.name.replace('.lite', '')}.${options.extension}`;

    let to = options.target === 'webcomponents' ? 'webcomponent' : options.target;
    to = to === 'vue' ? 'vue3' : to;

    await compileCommand.run({
      parameters: {
        options: {
          from: 'mitosis',
          to,
          out: outFile,
          force: true,
          api: options.api,
          state: options.state,
          styles: options.styles
        },
        array: [filepath]
      },
      strings: stringTools.strings,
      filesystem: filesystemTools.filesystem,
      print: { ...printTools.print, info: () => null }
    });

    return {
      outFile
    };
  }