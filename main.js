function setStartBlock() {
  workspace.clear();
  let xml = '<xml xmlns="https://developers.google.com/blockly/xml"><block type="start" editable="false" deletable="false" movable="false" x="30" y="30"></block></xml>';
  let dom = Blockly.Xml.textToDom(xml);
  Blockly.Xml.domToWorkspace(dom, workspace);
}

function setProcedureName() {
  Blockly.VBA.PROCEDURE_NAME = document.getElementById("project_name").value;
}

function readXmlToWorkspace(input) {
  let file = input.files[0];
  let reader = new FileReader();
  reader.readAsText(file);

  reader.onload = function() {
    var xml = reader.result
    xml = Blockly.Xml.textToDom(xml);
    workspace.clear();
    Blockly.Xml.domToWorkspace(xml, workspace);

    let project_name = file.name;
    project_name = project_name.replace(".xml","");
    project_name = project_name.replace("shimablock_","");
    project_name = project_name.replace("(","");
    project_name = project_name.replace(")","");
    project_name = project_name.replace(" ","");
    document.getElementById("loadButton").value = "";

    document.getElementById("project_name").value = project_name;
    setProcedureName();
  };

  reader.onerror = function() {
    alert("ファイル読み込み時にエラーが発生しました。")
    console.log(reader.error);
  };

}

function downloadXml() {
  var project_name = document.getElementById("project_name").value;
  var download_file_name = "shimablock_" + project_name + ".xml";
  document.getElementById("download").download = download_file_name;

  var xml = Blockly.Xml.workspaceToDom(workspace);
  var xml_text = Blockly.Xml.domToPrettyText(xml);
  var content = xml_text;
  var blob = new Blob([ content ], { "type" : "text/xml" });
  if (window.navigator.msSaveBlob) { 
      window.navigator.msSaveOrOpenBlob(blob, download_file_name); 
  } else {
      document.getElementById("download").href = window.URL.createObjectURL(blob);
  }
}

function codeDownload() {
  var project_name = document.getElementById("project_name").value;
  var download_file_name = "shimablock_" + project_name + ".py";
  document.getElementById("codeDownload").download = download_file_name;

  var code = Blockly.Python.workspaceToCode(workspace);
  var content = code;
  var blob = new Blob([ content ], { "type" : "text/plain" });
  if (window.navigator.msSaveBlob) { 
      window.navigator.msSaveOrOpenBlob(blob, download_file_name); 
  } else {
      document.getElementById("codeDownload").href = window.URL.createObjectURL(blob);
  }
}