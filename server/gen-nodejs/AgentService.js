//
// Autogenerated by Thrift Compiler (0.12.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = require('./agent_types');
//HELPER FUNCTIONS AND STRUCTURES

var AgentService_addAgent_args = function(args) {
  this.agent = null;
  if (args) {
    if (args.agent !== undefined && args.agent !== null) {
      this.agent = new ttypes.Agent(args.agent);
    }
  }
};
AgentService_addAgent_args.prototype = {};
AgentService_addAgent_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.agent = new ttypes.Agent();
        this.agent.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AgentService_addAgent_args.prototype.write = function(output) {
  output.writeStructBegin('AgentService_addAgent_args');
  if (this.agent !== null && this.agent !== undefined) {
    output.writeFieldBegin('agent', Thrift.Type.STRUCT, 1);
    this.agent.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AgentService_addAgent_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Agent(args.success);
    }
  }
};
AgentService_addAgent_result.prototype = {};
AgentService_addAgent_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.Agent();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AgentService_addAgent_result.prototype.write = function(output) {
  output.writeStructBegin('AgentService_addAgent_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AgentService_deleteAgent_args = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
  }
};
AgentService_deleteAgent_args.prototype = {};
AgentService_deleteAgent_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.I16) {
        this.id = input.readI16();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AgentService_deleteAgent_args.prototype.write = function(output) {
  output.writeStructBegin('AgentService_deleteAgent_args');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I16, 1);
    output.writeI16(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AgentService_deleteAgent_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
AgentService_deleteAgent_result.prototype = {};
AgentService_deleteAgent_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.I16) {
        this.success = input.readI16();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AgentService_deleteAgent_result.prototype.write = function(output) {
  output.writeStructBegin('AgentService_deleteAgent_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.I16, 0);
    output.writeI16(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AgentService_updateAgent_args = function(args) {
  this.newAgent = null;
  if (args) {
    if (args.newAgent !== undefined && args.newAgent !== null) {
      this.newAgent = new ttypes.Agent(args.newAgent);
    }
  }
};
AgentService_updateAgent_args.prototype = {};
AgentService_updateAgent_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.newAgent = new ttypes.Agent();
        this.newAgent.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AgentService_updateAgent_args.prototype.write = function(output) {
  output.writeStructBegin('AgentService_updateAgent_args');
  if (this.newAgent !== null && this.newAgent !== undefined) {
    output.writeFieldBegin('newAgent', Thrift.Type.STRUCT, 1);
    this.newAgent.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AgentService_updateAgent_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Agent(args.success);
    }
  }
};
AgentService_updateAgent_result.prototype = {};
AgentService_updateAgent_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.Agent();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AgentService_updateAgent_result.prototype.write = function(output) {
  output.writeStructBegin('AgentService_updateAgent_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AgentService_getAgent_args = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
  }
};
AgentService_getAgent_args.prototype = {};
AgentService_getAgent_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.I16) {
        this.id = input.readI16();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AgentService_getAgent_args.prototype.write = function(output) {
  output.writeStructBegin('AgentService_getAgent_args');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I16, 1);
    output.writeI16(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AgentService_getAgent_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Agent(args.success);
    }
  }
};
AgentService_getAgent_result.prototype = {};
AgentService_getAgent_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.Agent();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AgentService_getAgent_result.prototype.write = function(output) {
  output.writeStructBegin('AgentService_getAgent_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AgentService_listAgent_args = function(args) {
};
AgentService_listAgent_args.prototype = {};
AgentService_listAgent_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AgentService_listAgent_args.prototype.write = function(output) {
  output.writeStructBegin('AgentService_listAgent_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AgentService_listAgent_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [ttypes.Agent]);
    }
  }
};
AgentService_listAgent_result.prototype = {};
AgentService_listAgent_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        this.success = [];
        var _rtmp31 = input.readListBegin();
        var _size0 = _rtmp31.size || 0;
        for (var _i2 = 0; _i2 < _size0; ++_i2) {
          var elem3 = null;
          elem3 = new ttypes.Agent();
          elem3.read(input);
          this.success.push(elem3);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AgentService_listAgent_result.prototype.write = function(output) {
  output.writeStructBegin('AgentService_listAgent_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter4 in this.success) {
      if (this.success.hasOwnProperty(iter4)) {
        iter4 = this.success[iter4];
        iter4.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AgentServiceClient = exports.Client = function(output, pClass) {
  this.output = output;
  this.pClass = pClass;
  this._seqid = 0;
  this._reqs = {};
};
AgentServiceClient.prototype = {};
AgentServiceClient.prototype.seqid = function() { return this._seqid; };
AgentServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };

AgentServiceClient.prototype.addAgent = function(agent, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_addAgent(agent);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_addAgent(agent);
  }
};

AgentServiceClient.prototype.send_addAgent = function(agent) {
  var output = new this.pClass(this.output);
  var params = {
    agent: agent
  };
  var args = new AgentService_addAgent_args(params);
  try {
    output.writeMessageBegin('addAgent', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

AgentServiceClient.prototype.recv_addAgent = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new AgentService_addAgent_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('addAgent failed: unknown result');
};

AgentServiceClient.prototype.deleteAgent = function(id, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_deleteAgent(id);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_deleteAgent(id);
  }
};

AgentServiceClient.prototype.send_deleteAgent = function(id) {
  var output = new this.pClass(this.output);
  var params = {
    id: id
  };
  var args = new AgentService_deleteAgent_args(params);
  try {
    output.writeMessageBegin('deleteAgent', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

AgentServiceClient.prototype.recv_deleteAgent = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new AgentService_deleteAgent_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('deleteAgent failed: unknown result');
};

AgentServiceClient.prototype.updateAgent = function(newAgent, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_updateAgent(newAgent);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_updateAgent(newAgent);
  }
};

AgentServiceClient.prototype.send_updateAgent = function(newAgent) {
  var output = new this.pClass(this.output);
  var params = {
    newAgent: newAgent
  };
  var args = new AgentService_updateAgent_args(params);
  try {
    output.writeMessageBegin('updateAgent', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

AgentServiceClient.prototype.recv_updateAgent = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new AgentService_updateAgent_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('updateAgent failed: unknown result');
};

AgentServiceClient.prototype.getAgent = function(id, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getAgent(id);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getAgent(id);
  }
};

AgentServiceClient.prototype.send_getAgent = function(id) {
  var output = new this.pClass(this.output);
  var params = {
    id: id
  };
  var args = new AgentService_getAgent_args(params);
  try {
    output.writeMessageBegin('getAgent', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

AgentServiceClient.prototype.recv_getAgent = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new AgentService_getAgent_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getAgent failed: unknown result');
};

AgentServiceClient.prototype.listAgent = function(callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_listAgent();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_listAgent();
  }
};

AgentServiceClient.prototype.send_listAgent = function() {
  var output = new this.pClass(this.output);
  var args = new AgentService_listAgent_args();
  try {
    output.writeMessageBegin('listAgent', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

AgentServiceClient.prototype.recv_listAgent = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new AgentService_listAgent_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('listAgent failed: unknown result');
};
var AgentServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
};
AgentServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
};
AgentServiceProcessor.prototype.process_addAgent = function(seqid, input, output) {
  var args = new AgentService_addAgent_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.addAgent.length === 1) {
    Q.fcall(this._handler.addAgent.bind(this._handler),
      args.agent
    ).then(function(result) {
      var result_obj = new AgentService_addAgent_result({success: result});
      output.writeMessageBegin("addAgent", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("addAgent", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.addAgent(args.agent, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new AgentService_addAgent_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("addAgent", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("addAgent", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
AgentServiceProcessor.prototype.process_deleteAgent = function(seqid, input, output) {
  var args = new AgentService_deleteAgent_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.deleteAgent.length === 1) {
    Q.fcall(this._handler.deleteAgent.bind(this._handler),
      args.id
    ).then(function(result) {
      var result_obj = new AgentService_deleteAgent_result({success: result});
      output.writeMessageBegin("deleteAgent", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("deleteAgent", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.deleteAgent(args.id, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new AgentService_deleteAgent_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("deleteAgent", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("deleteAgent", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
AgentServiceProcessor.prototype.process_updateAgent = function(seqid, input, output) {
  var args = new AgentService_updateAgent_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.updateAgent.length === 1) {
    Q.fcall(this._handler.updateAgent.bind(this._handler),
      args.newAgent
    ).then(function(result) {
      var result_obj = new AgentService_updateAgent_result({success: result});
      output.writeMessageBegin("updateAgent", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("updateAgent", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.updateAgent(args.newAgent, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new AgentService_updateAgent_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("updateAgent", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("updateAgent", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
AgentServiceProcessor.prototype.process_getAgent = function(seqid, input, output) {
  var args = new AgentService_getAgent_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getAgent.length === 1) {
    Q.fcall(this._handler.getAgent.bind(this._handler),
      args.id
    ).then(function(result) {
      var result_obj = new AgentService_getAgent_result({success: result});
      output.writeMessageBegin("getAgent", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("getAgent", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.getAgent(args.id, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new AgentService_getAgent_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getAgent", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getAgent", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
AgentServiceProcessor.prototype.process_listAgent = function(seqid, input, output) {
  var args = new AgentService_listAgent_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.listAgent.length === 0) {
    Q.fcall(this._handler.listAgent.bind(this._handler)
    ).then(function(result) {
      var result_obj = new AgentService_listAgent_result({success: result});
      output.writeMessageBegin("listAgent", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("listAgent", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.listAgent(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new AgentService_listAgent_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("listAgent", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("listAgent", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
