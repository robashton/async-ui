// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15109 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15109 = (function (f,fn_handler,meta15110){
this.f = f;
this.fn_handler = fn_handler;
this.meta15110 = meta15110;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15109.cljs$lang$type = true;
cljs.core.async.t15109.cljs$lang$ctorStr = "cljs.core.async/t15109";
cljs.core.async.t15109.cljs$lang$ctorPrWriter = (function (this__3837__auto__,writer__3838__auto__,opt__3839__auto__){return cljs.core._write.call(null,writer__3838__auto__,"cljs.core.async/t15109");
});
cljs.core.async.t15109.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15109.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15109.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15111){var self__ = this;
var _15111__$1 = this;return self__.meta15110;
});
cljs.core.async.t15109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15111,meta15110__$1){var self__ = this;
var _15111__$1 = this;return (new cljs.core.async.t15109(self__.f,self__.fn_handler,meta15110__$1));
});
cljs.core.async.__GT_t15109 = (function __GT_t15109(f__$1,fn_handler__$1,meta15110){return (new cljs.core.async.t15109(f__$1,fn_handler__$1,meta15110));
});
}
return (new cljs.core.async.t15109(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15113 = buff;if(G__15113)
{var bit__3919__auto__ = null;if(cljs.core.truth_((function (){var or__3293__auto__ = bit__3919__auto__;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return G__15113.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15113.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15113);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15113);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_15114 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15114);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_15114);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3281__auto__ = ret;if(cljs.core.truth_(and__3281__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3281__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4116__auto___15115 = n;var x_15116 = 0;while(true){
if((x_15116 < n__4116__auto___15115))
{(a[x_15116] = 0);
{
var G__15117 = (x_15116 + 1);
x_15116 = G__15117;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__15118 = (i + 1);
i = G__15118;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15122 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15122 = (function (flag,alt_flag,meta15123){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15123 = meta15123;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15122.cljs$lang$type = true;
cljs.core.async.t15122.cljs$lang$ctorStr = "cljs.core.async/t15122";
cljs.core.async.t15122.cljs$lang$ctorPrWriter = (function (this__3837__auto__,writer__3838__auto__,opt__3839__auto__){return cljs.core._write.call(null,writer__3838__auto__,"cljs.core.async/t15122");
});
cljs.core.async.t15122.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15122.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t15122.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t15122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15124){var self__ = this;
var _15124__$1 = this;return self__.meta15123;
});
cljs.core.async.t15122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15124,meta15123__$1){var self__ = this;
var _15124__$1 = this;return (new cljs.core.async.t15122(self__.flag,self__.alt_flag,meta15123__$1));
});
cljs.core.async.__GT_t15122 = (function __GT_t15122(flag__$1,alt_flag__$1,meta15123){return (new cljs.core.async.t15122(flag__$1,alt_flag__$1,meta15123));
});
}
return (new cljs.core.async.t15122(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15128 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15128 = (function (cb,flag,alt_handler,meta15129){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15129 = meta15129;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15128.cljs$lang$type = true;
cljs.core.async.t15128.cljs$lang$ctorStr = "cljs.core.async/t15128";
cljs.core.async.t15128.cljs$lang$ctorPrWriter = (function (this__3837__auto__,writer__3838__auto__,opt__3839__auto__){return cljs.core._write.call(null,writer__3838__auto__,"cljs.core.async/t15128");
});
cljs.core.async.t15128.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15128.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15128.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15130){var self__ = this;
var _15130__$1 = this;return self__.meta15129;
});
cljs.core.async.t15128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15130,meta15129__$1){var self__ = this;
var _15130__$1 = this;return (new cljs.core.async.t15128(self__.cb,self__.flag,self__.alt_handler,meta15129__$1));
});
cljs.core.async.__GT_t15128 = (function __GT_t15128(cb__$1,flag__$1,alt_handler__$1,meta15129){return (new cljs.core.async.t15128(cb__$1,flag__$1,alt_handler__$1,meta15129));
});
}
return (new cljs.core.async.t15128(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15131_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15131_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3293__auto__ = wport;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__15132 = (i + 1);
i = G__15132;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3293__auto__ = ret;if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3281__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3281__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3281__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__15133){var map__15135 = p__15133;var map__15135__$1 = ((cljs.core.seq_QMARK_.call(null,map__15135))?cljs.core.apply.call(null,cljs.core.hash_map,map__15135):map__15135);var opts = map__15135__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15133 = null;if (arguments.length > 1) {
  p__15133 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15133);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15136){
var ports = cljs.core.first(arglist__15136);
var p__15133 = cljs.core.rest(arglist__15136);
return alts_BANG___delegate(ports,p__15133);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15144 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15144 = (function (ch,f,map_LT_,meta15145){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15145 = meta15145;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15144.cljs$lang$type = true;
cljs.core.async.t15144.cljs$lang$ctorStr = "cljs.core.async/t15144";
cljs.core.async.t15144.cljs$lang$ctorPrWriter = (function (this__3837__auto__,writer__3838__auto__,opt__3839__auto__){return cljs.core._write.call(null,writer__3838__auto__,"cljs.core.async/t15144");
});
cljs.core.async.t15144.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15144.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15144.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15144.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15147 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15147 = (function (fn1,_,meta15145,ch,f,map_LT_,meta15148){
this.fn1 = fn1;
this._ = _;
this.meta15145 = meta15145;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15148 = meta15148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15147.cljs$lang$type = true;
cljs.core.async.t15147.cljs$lang$ctorStr = "cljs.core.async/t15147";
cljs.core.async.t15147.cljs$lang$ctorPrWriter = (function (this__3837__auto__,writer__3838__auto__,opt__3839__auto__){return cljs.core._write.call(null,writer__3838__auto__,"cljs.core.async/t15147");
});
cljs.core.async.t15147.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15147.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t15147.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t15147.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__15137_SHARP_){return f1.call(null,(((p1__15137_SHARP_ == null))?null:self__.f.call(null,p1__15137_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t15147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15149){var self__ = this;
var _15149__$1 = this;return self__.meta15148;
});
cljs.core.async.t15147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15149,meta15148__$1){var self__ = this;
var _15149__$1 = this;return (new cljs.core.async.t15147(self__.fn1,self__._,self__.meta15145,self__.ch,self__.f,self__.map_LT_,meta15148__$1));
});
cljs.core.async.__GT_t15147 = (function __GT_t15147(fn1__$1,___$2,meta15145__$1,ch__$2,f__$2,map_LT___$2,meta15148){return (new cljs.core.async.t15147(fn1__$1,___$2,meta15145__$1,ch__$2,f__$2,map_LT___$2,meta15148));
});
}
return (new cljs.core.async.t15147(fn1,___$1,self__.meta15145,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3281__auto__ = ret;if(cljs.core.truth_(and__3281__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3281__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t15144.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15144.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15146){var self__ = this;
var _15146__$1 = this;return self__.meta15145;
});
cljs.core.async.t15144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15146,meta15145__$1){var self__ = this;
var _15146__$1 = this;return (new cljs.core.async.t15144(self__.ch,self__.f,self__.map_LT_,meta15145__$1));
});
cljs.core.async.__GT_t15144 = (function __GT_t15144(ch__$1,f__$1,map_LT___$1,meta15145){return (new cljs.core.async.t15144(ch__$1,f__$1,map_LT___$1,meta15145));
});
}
return (new cljs.core.async.t15144(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15153 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15153 = (function (ch,f,map_GT_,meta15154){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15154 = meta15154;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15153.cljs$lang$type = true;
cljs.core.async.t15153.cljs$lang$ctorStr = "cljs.core.async/t15153";
cljs.core.async.t15153.cljs$lang$ctorPrWriter = (function (this__3837__auto__,writer__3838__auto__,opt__3839__auto__){return cljs.core._write.call(null,writer__3838__auto__,"cljs.core.async/t15153");
});
cljs.core.async.t15153.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15153.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15153.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15153.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15153.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15153.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15155){var self__ = this;
var _15155__$1 = this;return self__.meta15154;
});
cljs.core.async.t15153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15155,meta15154__$1){var self__ = this;
var _15155__$1 = this;return (new cljs.core.async.t15153(self__.ch,self__.f,self__.map_GT_,meta15154__$1));
});
cljs.core.async.__GT_t15153 = (function __GT_t15153(ch__$1,f__$1,map_GT___$1,meta15154){return (new cljs.core.async.t15153(ch__$1,f__$1,map_GT___$1,meta15154));
});
}
return (new cljs.core.async.t15153(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15159 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15159 = (function (ch,p,filter_GT_,meta15160){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15160 = meta15160;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15159.cljs$lang$type = true;
cljs.core.async.t15159.cljs$lang$ctorStr = "cljs.core.async/t15159";
cljs.core.async.t15159.cljs$lang$ctorPrWriter = (function (this__3837__auto__,writer__3838__auto__,opt__3839__auto__){return cljs.core._write.call(null,writer__3838__auto__,"cljs.core.async/t15159");
});
cljs.core.async.t15159.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15159.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15159.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15159.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15159.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15159.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15161){var self__ = this;
var _15161__$1 = this;return self__.meta15160;
});
cljs.core.async.t15159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15161,meta15160__$1){var self__ = this;
var _15161__$1 = this;return (new cljs.core.async.t15159(self__.ch,self__.p,self__.filter_GT_,meta15160__$1));
});
cljs.core.async.__GT_t15159 = (function __GT_t15159(ch__$1,p__$1,filter_GT___$1,meta15160){return (new cljs.core.async.t15159(ch__$1,p__$1,filter_GT___$1,meta15160));
});
}
return (new cljs.core.async.t15159(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5824__auto___15244 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5825__auto__ = (function (){var switch__5754__auto__ = (function (state_15223){var state_val_15224 = (state_15223[1]);if((state_val_15224 === 1))
{var state_15223__$1 = state_15223;var statearr_15225_15245 = state_15223__$1;(statearr_15225_15245[2] = null);
(statearr_15225_15245[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15224 === 2))
{var state_15223__$1 = state_15223;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15223__$1,4,ch);
} else
{if((state_val_15224 === 3))
{var inst_15221 = (state_15223[2]);var state_15223__$1 = state_15223;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15223__$1,inst_15221);
} else
{if((state_val_15224 === 4))
{var inst_15205 = (state_15223[7]);var inst_15205__$1 = (state_15223[2]);var inst_15206 = (inst_15205__$1 == null);var state_15223__$1 = (function (){var statearr_15226 = state_15223;(statearr_15226[7] = inst_15205__$1);
return statearr_15226;
})();if(cljs.core.truth_(inst_15206))
{var statearr_15227_15246 = state_15223__$1;(statearr_15227_15246[1] = 5);
} else
{var statearr_15228_15247 = state_15223__$1;(statearr_15228_15247[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15224 === 5))
{var inst_15208 = cljs.core.async.close_BANG_.call(null,out);var state_15223__$1 = state_15223;var statearr_15229_15248 = state_15223__$1;(statearr_15229_15248[2] = inst_15208);
(statearr_15229_15248[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15224 === 6))
{var inst_15205 = (state_15223[7]);var inst_15210 = p.call(null,inst_15205);var state_15223__$1 = state_15223;if(cljs.core.truth_(inst_15210))
{var statearr_15230_15249 = state_15223__$1;(statearr_15230_15249[1] = 8);
} else
{var statearr_15231_15250 = state_15223__$1;(statearr_15231_15250[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15224 === 7))
{var inst_15219 = (state_15223[2]);var state_15223__$1 = state_15223;var statearr_15232_15251 = state_15223__$1;(statearr_15232_15251[2] = inst_15219);
(statearr_15232_15251[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15224 === 8))
{var inst_15205 = (state_15223[7]);var state_15223__$1 = state_15223;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15223__$1,11,out,inst_15205);
} else
{if((state_val_15224 === 9))
{var state_15223__$1 = state_15223;var statearr_15233_15252 = state_15223__$1;(statearr_15233_15252[2] = null);
(statearr_15233_15252[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15224 === 10))
{var inst_15216 = (state_15223[2]);var state_15223__$1 = (function (){var statearr_15234 = state_15223;(statearr_15234[8] = inst_15216);
return statearr_15234;
})();var statearr_15235_15253 = state_15223__$1;(statearr_15235_15253[2] = null);
(statearr_15235_15253[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15224 === 11))
{var inst_15213 = (state_15223[2]);var state_15223__$1 = state_15223;var statearr_15236_15254 = state_15223__$1;(statearr_15236_15254[2] = inst_15213);
(statearr_15236_15254[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5754__auto__){
return (function() {
var state_machine__5755__auto__ = null;
var state_machine__5755__auto____0 = (function (){var statearr_15240 = (new Array(9));(statearr_15240[0] = state_machine__5755__auto__);
(statearr_15240[1] = 1);
return statearr_15240;
});
var state_machine__5755__auto____1 = (function (state_15223){while(true){
var ret_value__5756__auto__ = (function (){try{while(true){
var result__5757__auto__ = switch__5754__auto__.call(null,state_15223);if(cljs.core.keyword_identical_QMARK_.call(null,result__5757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5757__auto__;
}
break;
}
}catch (e15241){if((e15241 instanceof Object))
{var ex__5758__auto__ = e15241;var statearr_15242_15255 = state_15223;(statearr_15242_15255[5] = ex__5758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15223);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15241;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15256 = state_15223;
state_15223 = G__15256;
continue;
}
} else
{return ret_value__5756__auto__;
}
break;
}
});
state_machine__5755__auto__ = function(state_15223){
switch(arguments.length){
case 0:
return state_machine__5755__auto____0.call(this);
case 1:
return state_machine__5755__auto____1.call(this,state_15223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5755__auto____0;
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5755__auto____1;
return state_machine__5755__auto__;
})()
;})(switch__5754__auto__))
})();var state__5826__auto__ = (function (){var statearr_15243 = f__5825__auto__.call(null);(statearr_15243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5824__auto___15244);
return statearr_15243;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5826__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5824__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5825__auto__ = (function (){var switch__5754__auto__ = (function (state_15408){var state_val_15409 = (state_15408[1]);if((state_val_15409 === 1))
{var state_15408__$1 = state_15408;var statearr_15410_15447 = state_15408__$1;(statearr_15410_15447[2] = null);
(statearr_15410_15447[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15409 === 2))
{var state_15408__$1 = state_15408;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15408__$1,4,in$);
} else
{if((state_val_15409 === 3))
{var inst_15406 = (state_15408[2]);var state_15408__$1 = state_15408;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15408__$1,inst_15406);
} else
{if((state_val_15409 === 4))
{var inst_15354 = (state_15408[7]);var inst_15354__$1 = (state_15408[2]);var inst_15355 = (inst_15354__$1 == null);var state_15408__$1 = (function (){var statearr_15411 = state_15408;(statearr_15411[7] = inst_15354__$1);
return statearr_15411;
})();if(cljs.core.truth_(inst_15355))
{var statearr_15412_15448 = state_15408__$1;(statearr_15412_15448[1] = 5);
} else
{var statearr_15413_15449 = state_15408__$1;(statearr_15413_15449[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15409 === 5))
{var inst_15357 = cljs.core.async.close_BANG_.call(null,out);var state_15408__$1 = state_15408;var statearr_15414_15450 = state_15408__$1;(statearr_15414_15450[2] = inst_15357);
(statearr_15414_15450[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15409 === 6))
{var inst_15354 = (state_15408[7]);var inst_15359 = f.call(null,inst_15354);var inst_15364 = cljs.core.seq.call(null,inst_15359);var inst_15365 = inst_15364;var inst_15366 = null;var inst_15367 = 0;var inst_15368 = 0;var state_15408__$1 = (function (){var statearr_15415 = state_15408;(statearr_15415[8] = inst_15368);
(statearr_15415[9] = inst_15366);
(statearr_15415[10] = inst_15367);
(statearr_15415[11] = inst_15365);
return statearr_15415;
})();var statearr_15416_15451 = state_15408__$1;(statearr_15416_15451[2] = null);
(statearr_15416_15451[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15409 === 7))
{var inst_15404 = (state_15408[2]);var state_15408__$1 = state_15408;var statearr_15417_15452 = state_15408__$1;(statearr_15417_15452[2] = inst_15404);
(statearr_15417_15452[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15409 === 8))
{var inst_15368 = (state_15408[8]);var inst_15367 = (state_15408[10]);var inst_15370 = (inst_15368 < inst_15367);var inst_15371 = inst_15370;var state_15408__$1 = state_15408;if(cljs.core.truth_(inst_15371))
{var statearr_15418_15453 = state_15408__$1;(statearr_15418_15453[1] = 10);
} else
{var statearr_15419_15454 = state_15408__$1;(statearr_15419_15454[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15409 === 9))
{var inst_15401 = (state_15408[2]);var state_15408__$1 = (function (){var statearr_15420 = state_15408;(statearr_15420[12] = inst_15401);
return statearr_15420;
})();var statearr_15421_15455 = state_15408__$1;(statearr_15421_15455[2] = null);
(statearr_15421_15455[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15409 === 10))
{var inst_15368 = (state_15408[8]);var inst_15366 = (state_15408[9]);var inst_15373 = cljs.core._nth.call(null,inst_15366,inst_15368);var state_15408__$1 = state_15408;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15408__$1,13,out,inst_15373);
} else
{if((state_val_15409 === 11))
{var inst_15379 = (state_15408[13]);var inst_15365 = (state_15408[11]);var inst_15379__$1 = cljs.core.seq.call(null,inst_15365);var state_15408__$1 = (function (){var statearr_15425 = state_15408;(statearr_15425[13] = inst_15379__$1);
return statearr_15425;
})();if(inst_15379__$1)
{var statearr_15426_15456 = state_15408__$1;(statearr_15426_15456[1] = 14);
} else
{var statearr_15427_15457 = state_15408__$1;(statearr_15427_15457[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15409 === 12))
{var inst_15399 = (state_15408[2]);var state_15408__$1 = state_15408;var statearr_15428_15458 = state_15408__$1;(statearr_15428_15458[2] = inst_15399);
(statearr_15428_15458[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15409 === 13))
{var inst_15368 = (state_15408[8]);var inst_15366 = (state_15408[9]);var inst_15367 = (state_15408[10]);var inst_15365 = (state_15408[11]);var inst_15375 = (state_15408[2]);var inst_15376 = (inst_15368 + 1);var tmp15422 = inst_15366;var tmp15423 = inst_15367;var tmp15424 = inst_15365;var inst_15365__$1 = tmp15424;var inst_15366__$1 = tmp15422;var inst_15367__$1 = tmp15423;var inst_15368__$1 = inst_15376;var state_15408__$1 = (function (){var statearr_15429 = state_15408;(statearr_15429[14] = inst_15375);
(statearr_15429[8] = inst_15368__$1);
(statearr_15429[9] = inst_15366__$1);
(statearr_15429[10] = inst_15367__$1);
(statearr_15429[11] = inst_15365__$1);
return statearr_15429;
})();var statearr_15430_15459 = state_15408__$1;(statearr_15430_15459[2] = null);
(statearr_15430_15459[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15409 === 14))
{var inst_15379 = (state_15408[13]);var inst_15381 = cljs.core.chunked_seq_QMARK_.call(null,inst_15379);var state_15408__$1 = state_15408;if(inst_15381)
{var statearr_15431_15460 = state_15408__$1;(statearr_15431_15460[1] = 17);
} else
{var statearr_15432_15461 = state_15408__$1;(statearr_15432_15461[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15409 === 15))
{var state_15408__$1 = state_15408;var statearr_15433_15462 = state_15408__$1;(statearr_15433_15462[2] = null);
(statearr_15433_15462[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15409 === 16))
{var inst_15397 = (state_15408[2]);var state_15408__$1 = state_15408;var statearr_15434_15463 = state_15408__$1;(statearr_15434_15463[2] = inst_15397);
(statearr_15434_15463[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15409 === 17))
{var inst_15379 = (state_15408[13]);var inst_15383 = cljs.core.chunk_first.call(null,inst_15379);var inst_15384 = cljs.core.chunk_rest.call(null,inst_15379);var inst_15385 = cljs.core.count.call(null,inst_15383);var inst_15365 = inst_15384;var inst_15366 = inst_15383;var inst_15367 = inst_15385;var inst_15368 = 0;var state_15408__$1 = (function (){var statearr_15435 = state_15408;(statearr_15435[8] = inst_15368);
(statearr_15435[9] = inst_15366);
(statearr_15435[10] = inst_15367);
(statearr_15435[11] = inst_15365);
return statearr_15435;
})();var statearr_15436_15464 = state_15408__$1;(statearr_15436_15464[2] = null);
(statearr_15436_15464[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15409 === 18))
{var inst_15379 = (state_15408[13]);var inst_15388 = cljs.core.first.call(null,inst_15379);var state_15408__$1 = state_15408;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15408__$1,20,out,inst_15388);
} else
{if((state_val_15409 === 19))
{var inst_15394 = (state_15408[2]);var state_15408__$1 = state_15408;var statearr_15437_15465 = state_15408__$1;(statearr_15437_15465[2] = inst_15394);
(statearr_15437_15465[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15409 === 20))
{var inst_15379 = (state_15408[13]);var inst_15390 = (state_15408[2]);var inst_15391 = cljs.core.next.call(null,inst_15379);var inst_15365 = inst_15391;var inst_15366 = null;var inst_15367 = 0;var inst_15368 = 0;var state_15408__$1 = (function (){var statearr_15438 = state_15408;(statearr_15438[15] = inst_15390);
(statearr_15438[8] = inst_15368);
(statearr_15438[9] = inst_15366);
(statearr_15438[10] = inst_15367);
(statearr_15438[11] = inst_15365);
return statearr_15438;
})();var statearr_15439_15466 = state_15408__$1;(statearr_15439_15466[2] = null);
(statearr_15439_15466[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5754__auto__){
return (function() {
var state_machine__5755__auto__ = null;
var state_machine__5755__auto____0 = (function (){var statearr_15443 = (new Array(16));(statearr_15443[0] = state_machine__5755__auto__);
(statearr_15443[1] = 1);
return statearr_15443;
});
var state_machine__5755__auto____1 = (function (state_15408){while(true){
var ret_value__5756__auto__ = (function (){try{while(true){
var result__5757__auto__ = switch__5754__auto__.call(null,state_15408);if(cljs.core.keyword_identical_QMARK_.call(null,result__5757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5757__auto__;
}
break;
}
}catch (e15444){if((e15444 instanceof Object))
{var ex__5758__auto__ = e15444;var statearr_15445_15467 = state_15408;(statearr_15445_15467[5] = ex__5758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15408);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15444;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15468 = state_15408;
state_15408 = G__15468;
continue;
}
} else
{return ret_value__5756__auto__;
}
break;
}
});
state_machine__5755__auto__ = function(state_15408){
switch(arguments.length){
case 0:
return state_machine__5755__auto____0.call(this);
case 1:
return state_machine__5755__auto____1.call(this,state_15408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5755__auto____0;
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5755__auto____1;
return state_machine__5755__auto__;
})()
;})(switch__5754__auto__))
})();var state__5826__auto__ = (function (){var statearr_15446 = f__5825__auto__.call(null);(statearr_15446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5824__auto__);
return statearr_15446;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5826__auto__);
}));
return c__5824__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5824__auto___15549 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5825__auto__ = (function (){var switch__5754__auto__ = (function (state_15528){var state_val_15529 = (state_15528[1]);if((state_val_15529 === 1))
{var state_15528__$1 = state_15528;var statearr_15530_15550 = state_15528__$1;(statearr_15530_15550[2] = null);
(statearr_15530_15550[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15529 === 2))
{var state_15528__$1 = state_15528;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15528__$1,4,from);
} else
{if((state_val_15529 === 3))
{var inst_15526 = (state_15528[2]);var state_15528__$1 = state_15528;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15528__$1,inst_15526);
} else
{if((state_val_15529 === 4))
{var inst_15511 = (state_15528[7]);var inst_15511__$1 = (state_15528[2]);var inst_15512 = (inst_15511__$1 == null);var state_15528__$1 = (function (){var statearr_15531 = state_15528;(statearr_15531[7] = inst_15511__$1);
return statearr_15531;
})();if(cljs.core.truth_(inst_15512))
{var statearr_15532_15551 = state_15528__$1;(statearr_15532_15551[1] = 5);
} else
{var statearr_15533_15552 = state_15528__$1;(statearr_15533_15552[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15529 === 5))
{var state_15528__$1 = state_15528;if(cljs.core.truth_(close_QMARK_))
{var statearr_15534_15553 = state_15528__$1;(statearr_15534_15553[1] = 8);
} else
{var statearr_15535_15554 = state_15528__$1;(statearr_15535_15554[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15529 === 6))
{var inst_15511 = (state_15528[7]);var state_15528__$1 = state_15528;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15528__$1,11,to,inst_15511);
} else
{if((state_val_15529 === 7))
{var inst_15524 = (state_15528[2]);var state_15528__$1 = state_15528;var statearr_15536_15555 = state_15528__$1;(statearr_15536_15555[2] = inst_15524);
(statearr_15536_15555[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15529 === 8))
{var inst_15515 = cljs.core.async.close_BANG_.call(null,to);var state_15528__$1 = state_15528;var statearr_15537_15556 = state_15528__$1;(statearr_15537_15556[2] = inst_15515);
(statearr_15537_15556[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15529 === 9))
{var state_15528__$1 = state_15528;var statearr_15538_15557 = state_15528__$1;(statearr_15538_15557[2] = null);
(statearr_15538_15557[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15529 === 10))
{var inst_15518 = (state_15528[2]);var state_15528__$1 = state_15528;var statearr_15539_15558 = state_15528__$1;(statearr_15539_15558[2] = inst_15518);
(statearr_15539_15558[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15529 === 11))
{var inst_15521 = (state_15528[2]);var state_15528__$1 = (function (){var statearr_15540 = state_15528;(statearr_15540[8] = inst_15521);
return statearr_15540;
})();var statearr_15541_15559 = state_15528__$1;(statearr_15541_15559[2] = null);
(statearr_15541_15559[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5754__auto__){
return (function() {
var state_machine__5755__auto__ = null;
var state_machine__5755__auto____0 = (function (){var statearr_15545 = (new Array(9));(statearr_15545[0] = state_machine__5755__auto__);
(statearr_15545[1] = 1);
return statearr_15545;
});
var state_machine__5755__auto____1 = (function (state_15528){while(true){
var ret_value__5756__auto__ = (function (){try{while(true){
var result__5757__auto__ = switch__5754__auto__.call(null,state_15528);if(cljs.core.keyword_identical_QMARK_.call(null,result__5757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5757__auto__;
}
break;
}
}catch (e15546){if((e15546 instanceof Object))
{var ex__5758__auto__ = e15546;var statearr_15547_15560 = state_15528;(statearr_15547_15560[5] = ex__5758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15528);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15546;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15561 = state_15528;
state_15528 = G__15561;
continue;
}
} else
{return ret_value__5756__auto__;
}
break;
}
});
state_machine__5755__auto__ = function(state_15528){
switch(arguments.length){
case 0:
return state_machine__5755__auto____0.call(this);
case 1:
return state_machine__5755__auto____1.call(this,state_15528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5755__auto____0;
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5755__auto____1;
return state_machine__5755__auto__;
})()
;})(switch__5754__auto__))
})();var state__5826__auto__ = (function (){var statearr_15548 = f__5825__auto__.call(null);(statearr_15548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5824__auto___15549);
return statearr_15548;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5826__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5824__auto___15648 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5825__auto__ = (function (){var switch__5754__auto__ = (function (state_15626){var state_val_15627 = (state_15626[1]);if((state_val_15627 === 1))
{var state_15626__$1 = state_15626;var statearr_15628_15649 = state_15626__$1;(statearr_15628_15649[2] = null);
(statearr_15628_15649[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15627 === 2))
{var state_15626__$1 = state_15626;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15626__$1,4,ch);
} else
{if((state_val_15627 === 3))
{var inst_15624 = (state_15626[2]);var state_15626__$1 = state_15626;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15626__$1,inst_15624);
} else
{if((state_val_15627 === 4))
{var inst_15607 = (state_15626[7]);var inst_15607__$1 = (state_15626[2]);var inst_15608 = (inst_15607__$1 == null);var state_15626__$1 = (function (){var statearr_15629 = state_15626;(statearr_15629[7] = inst_15607__$1);
return statearr_15629;
})();if(cljs.core.truth_(inst_15608))
{var statearr_15630_15650 = state_15626__$1;(statearr_15630_15650[1] = 5);
} else
{var statearr_15631_15651 = state_15626__$1;(statearr_15631_15651[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15627 === 5))
{var inst_15610 = cljs.core.async.close_BANG_.call(null,tc);var inst_15611 = cljs.core.async.close_BANG_.call(null,fc);var state_15626__$1 = (function (){var statearr_15632 = state_15626;(statearr_15632[8] = inst_15610);
return statearr_15632;
})();var statearr_15633_15652 = state_15626__$1;(statearr_15633_15652[2] = inst_15611);
(statearr_15633_15652[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15627 === 6))
{var inst_15607 = (state_15626[7]);var inst_15613 = p.call(null,inst_15607);var state_15626__$1 = state_15626;if(cljs.core.truth_(inst_15613))
{var statearr_15634_15653 = state_15626__$1;(statearr_15634_15653[1] = 9);
} else
{var statearr_15635_15654 = state_15626__$1;(statearr_15635_15654[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15627 === 7))
{var inst_15622 = (state_15626[2]);var state_15626__$1 = state_15626;var statearr_15636_15655 = state_15626__$1;(statearr_15636_15655[2] = inst_15622);
(statearr_15636_15655[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15627 === 8))
{var inst_15619 = (state_15626[2]);var state_15626__$1 = (function (){var statearr_15637 = state_15626;(statearr_15637[9] = inst_15619);
return statearr_15637;
})();var statearr_15638_15656 = state_15626__$1;(statearr_15638_15656[2] = null);
(statearr_15638_15656[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15627 === 9))
{var state_15626__$1 = state_15626;var statearr_15639_15657 = state_15626__$1;(statearr_15639_15657[2] = tc);
(statearr_15639_15657[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15627 === 10))
{var state_15626__$1 = state_15626;var statearr_15640_15658 = state_15626__$1;(statearr_15640_15658[2] = fc);
(statearr_15640_15658[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15627 === 11))
{var inst_15607 = (state_15626[7]);var inst_15617 = (state_15626[2]);var state_15626__$1 = state_15626;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15626__$1,8,inst_15617,inst_15607);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5754__auto__){
return (function() {
var state_machine__5755__auto__ = null;
var state_machine__5755__auto____0 = (function (){var statearr_15644 = (new Array(10));(statearr_15644[0] = state_machine__5755__auto__);
(statearr_15644[1] = 1);
return statearr_15644;
});
var state_machine__5755__auto____1 = (function (state_15626){while(true){
var ret_value__5756__auto__ = (function (){try{while(true){
var result__5757__auto__ = switch__5754__auto__.call(null,state_15626);if(cljs.core.keyword_identical_QMARK_.call(null,result__5757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5757__auto__;
}
break;
}
}catch (e15645){if((e15645 instanceof Object))
{var ex__5758__auto__ = e15645;var statearr_15646_15659 = state_15626;(statearr_15646_15659[5] = ex__5758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15626);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15645;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15660 = state_15626;
state_15626 = G__15660;
continue;
}
} else
{return ret_value__5756__auto__;
}
break;
}
});
state_machine__5755__auto__ = function(state_15626){
switch(arguments.length){
case 0:
return state_machine__5755__auto____0.call(this);
case 1:
return state_machine__5755__auto____1.call(this,state_15626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5755__auto____0;
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5755__auto____1;
return state_machine__5755__auto__;
})()
;})(switch__5754__auto__))
})();var state__5826__auto__ = (function (){var statearr_15647 = f__5825__auto__.call(null);(statearr_15647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5824__auto___15648);
return statearr_15647;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5826__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5824__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5825__auto__ = (function (){var switch__5754__auto__ = (function (state_15707){var state_val_15708 = (state_15707[1]);if((state_val_15708 === 7))
{var inst_15703 = (state_15707[2]);var state_15707__$1 = state_15707;var statearr_15709_15725 = state_15707__$1;(statearr_15709_15725[2] = inst_15703);
(statearr_15709_15725[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15708 === 6))
{var inst_15696 = (state_15707[7]);var inst_15693 = (state_15707[8]);var inst_15700 = f.call(null,inst_15693,inst_15696);var inst_15693__$1 = inst_15700;var state_15707__$1 = (function (){var statearr_15710 = state_15707;(statearr_15710[8] = inst_15693__$1);
return statearr_15710;
})();var statearr_15711_15726 = state_15707__$1;(statearr_15711_15726[2] = null);
(statearr_15711_15726[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15708 === 5))
{var inst_15693 = (state_15707[8]);var state_15707__$1 = state_15707;var statearr_15712_15727 = state_15707__$1;(statearr_15712_15727[2] = inst_15693);
(statearr_15712_15727[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15708 === 4))
{var inst_15696 = (state_15707[7]);var inst_15696__$1 = (state_15707[2]);var inst_15697 = (inst_15696__$1 == null);var state_15707__$1 = (function (){var statearr_15713 = state_15707;(statearr_15713[7] = inst_15696__$1);
return statearr_15713;
})();if(cljs.core.truth_(inst_15697))
{var statearr_15714_15728 = state_15707__$1;(statearr_15714_15728[1] = 5);
} else
{var statearr_15715_15729 = state_15707__$1;(statearr_15715_15729[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15708 === 3))
{var inst_15705 = (state_15707[2]);var state_15707__$1 = state_15707;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15707__$1,inst_15705);
} else
{if((state_val_15708 === 2))
{var state_15707__$1 = state_15707;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15707__$1,4,ch);
} else
{if((state_val_15708 === 1))
{var inst_15693 = init;var state_15707__$1 = (function (){var statearr_15716 = state_15707;(statearr_15716[8] = inst_15693);
return statearr_15716;
})();var statearr_15717_15730 = state_15707__$1;(statearr_15717_15730[2] = null);
(statearr_15717_15730[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5754__auto__){
return (function() {
var state_machine__5755__auto__ = null;
var state_machine__5755__auto____0 = (function (){var statearr_15721 = (new Array(9));(statearr_15721[0] = state_machine__5755__auto__);
(statearr_15721[1] = 1);
return statearr_15721;
});
var state_machine__5755__auto____1 = (function (state_15707){while(true){
var ret_value__5756__auto__ = (function (){try{while(true){
var result__5757__auto__ = switch__5754__auto__.call(null,state_15707);if(cljs.core.keyword_identical_QMARK_.call(null,result__5757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5757__auto__;
}
break;
}
}catch (e15722){if((e15722 instanceof Object))
{var ex__5758__auto__ = e15722;var statearr_15723_15731 = state_15707;(statearr_15723_15731[5] = ex__5758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15707);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15722;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15732 = state_15707;
state_15707 = G__15732;
continue;
}
} else
{return ret_value__5756__auto__;
}
break;
}
});
state_machine__5755__auto__ = function(state_15707){
switch(arguments.length){
case 0:
return state_machine__5755__auto____0.call(this);
case 1:
return state_machine__5755__auto____1.call(this,state_15707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5755__auto____0;
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5755__auto____1;
return state_machine__5755__auto__;
})()
;})(switch__5754__auto__))
})();var state__5826__auto__ = (function (){var statearr_15724 = f__5825__auto__.call(null);(statearr_15724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5824__auto__);
return statearr_15724;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5826__auto__);
}));
return c__5824__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5824__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5825__auto__ = (function (){var switch__5754__auto__ = (function (state_15794){var state_val_15795 = (state_15794[1]);if((state_val_15795 === 1))
{var inst_15774 = cljs.core.seq.call(null,coll);var inst_15775 = inst_15774;var state_15794__$1 = (function (){var statearr_15796 = state_15794;(statearr_15796[7] = inst_15775);
return statearr_15796;
})();var statearr_15797_15815 = state_15794__$1;(statearr_15797_15815[2] = null);
(statearr_15797_15815[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15795 === 2))
{var inst_15775 = (state_15794[7]);var state_15794__$1 = state_15794;if(cljs.core.truth_(inst_15775))
{var statearr_15798_15816 = state_15794__$1;(statearr_15798_15816[1] = 4);
} else
{var statearr_15799_15817 = state_15794__$1;(statearr_15799_15817[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15795 === 3))
{var inst_15792 = (state_15794[2]);var state_15794__$1 = state_15794;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15794__$1,inst_15792);
} else
{if((state_val_15795 === 4))
{var inst_15775 = (state_15794[7]);var inst_15778 = cljs.core.first.call(null,inst_15775);var state_15794__$1 = state_15794;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15794__$1,7,ch,inst_15778);
} else
{if((state_val_15795 === 5))
{var state_15794__$1 = state_15794;if(cljs.core.truth_(close_QMARK_))
{var statearr_15800_15818 = state_15794__$1;(statearr_15800_15818[1] = 8);
} else
{var statearr_15801_15819 = state_15794__$1;(statearr_15801_15819[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15795 === 6))
{var inst_15790 = (state_15794[2]);var state_15794__$1 = state_15794;var statearr_15802_15820 = state_15794__$1;(statearr_15802_15820[2] = inst_15790);
(statearr_15802_15820[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15795 === 7))
{var inst_15775 = (state_15794[7]);var inst_15780 = (state_15794[2]);var inst_15781 = cljs.core.next.call(null,inst_15775);var inst_15775__$1 = inst_15781;var state_15794__$1 = (function (){var statearr_15803 = state_15794;(statearr_15803[8] = inst_15780);
(statearr_15803[7] = inst_15775__$1);
return statearr_15803;
})();var statearr_15804_15821 = state_15794__$1;(statearr_15804_15821[2] = null);
(statearr_15804_15821[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15795 === 8))
{var inst_15785 = cljs.core.async.close_BANG_.call(null,ch);var state_15794__$1 = state_15794;var statearr_15805_15822 = state_15794__$1;(statearr_15805_15822[2] = inst_15785);
(statearr_15805_15822[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15795 === 9))
{var state_15794__$1 = state_15794;var statearr_15806_15823 = state_15794__$1;(statearr_15806_15823[2] = null);
(statearr_15806_15823[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15795 === 10))
{var inst_15788 = (state_15794[2]);var state_15794__$1 = state_15794;var statearr_15807_15824 = state_15794__$1;(statearr_15807_15824[2] = inst_15788);
(statearr_15807_15824[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5754__auto__){
return (function() {
var state_machine__5755__auto__ = null;
var state_machine__5755__auto____0 = (function (){var statearr_15811 = (new Array(9));(statearr_15811[0] = state_machine__5755__auto__);
(statearr_15811[1] = 1);
return statearr_15811;
});
var state_machine__5755__auto____1 = (function (state_15794){while(true){
var ret_value__5756__auto__ = (function (){try{while(true){
var result__5757__auto__ = switch__5754__auto__.call(null,state_15794);if(cljs.core.keyword_identical_QMARK_.call(null,result__5757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5757__auto__;
}
break;
}
}catch (e15812){if((e15812 instanceof Object))
{var ex__5758__auto__ = e15812;var statearr_15813_15825 = state_15794;(statearr_15813_15825[5] = ex__5758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15794);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15812;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15826 = state_15794;
state_15794 = G__15826;
continue;
}
} else
{return ret_value__5756__auto__;
}
break;
}
});
state_machine__5755__auto__ = function(state_15794){
switch(arguments.length){
case 0:
return state_machine__5755__auto____0.call(this);
case 1:
return state_machine__5755__auto____1.call(this,state_15794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5755__auto____0;
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5755__auto____1;
return state_machine__5755__auto__;
})()
;})(switch__5754__auto__))
})();var state__5826__auto__ = (function (){var statearr_15814 = f__5825__auto__.call(null);(statearr_15814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5824__auto__);
return statearr_15814;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5826__auto__);
}));
return c__5824__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj15828 = {};return obj15828;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3281__auto__ = _;if(and__3281__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3281__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3896__auto__ = (((_ == null))?null:_);return (function (){var or__3293__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3896__auto__)]);if(or__3293__auto__)
{return or__3293__auto__;
} else
{var or__3293__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3293__auto____$1)
{return or__3293__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj15830 = {};return obj15830;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3281__auto__ = m;if(and__3281__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3281__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3896__auto__ = (((m == null))?null:m);return (function (){var or__3293__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3896__auto__)]);if(or__3293__auto__)
{return or__3293__auto__;
} else
{var or__3293__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3293__auto____$1)
{return or__3293__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3281__auto__ = m;if(and__3281__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3281__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3896__auto__ = (((m == null))?null:m);return (function (){var or__3293__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3896__auto__)]);if(or__3293__auto__)
{return or__3293__auto__;
} else
{var or__3293__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3293__auto____$1)
{return or__3293__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3281__auto__ = m;if(and__3281__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3281__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3896__auto__ = (((m == null))?null:m);return (function (){var or__3293__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3896__auto__)]);if(or__3293__auto__)
{return or__3293__auto__;
} else
{var or__3293__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3293__auto____$1)
{return or__3293__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16045 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16045 = (function (cs,ch,mult,meta16046){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16046 = meta16046;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16045.cljs$lang$type = true;
cljs.core.async.t16045.cljs$lang$ctorStr = "cljs.core.async/t16045";
cljs.core.async.t16045.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3837__auto__,writer__3838__auto__,opt__3839__auto__){return cljs.core._write.call(null,writer__3838__auto__,"cljs.core.async/t16045");
});})(cs))
;
cljs.core.async.t16045.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16045.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16045.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16045.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16045.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16045.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16045.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16047){var self__ = this;
var _16047__$1 = this;return self__.meta16046;
});})(cs))
;
cljs.core.async.t16045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16047,meta16046__$1){var self__ = this;
var _16047__$1 = this;return (new cljs.core.async.t16045(self__.cs,self__.ch,self__.mult,meta16046__$1));
});})(cs))
;
cljs.core.async.__GT_t16045 = ((function (cs){
return (function __GT_t16045(cs__$1,ch__$1,mult__$1,meta16046){return (new cljs.core.async.t16045(cs__$1,ch__$1,mult__$1,meta16046));
});})(cs))
;
}
return (new cljs.core.async.t16045(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5824__auto___16259 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5825__auto__ = (function (){var switch__5754__auto__ = (function (state_16177){var state_val_16178 = (state_16177[1]);if((state_val_16178 === 32))
{var inst_16050 = (state_16177[7]);var inst_16126 = (state_16177[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16177,31,Object,null,30);var inst_16133 = cljs.core.async.put_BANG_.call(null,inst_16126,inst_16050,done);var state_16177__$1 = state_16177;var statearr_16179_16260 = state_16177__$1;(statearr_16179_16260[2] = inst_16133);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16177__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 1))
{var state_16177__$1 = state_16177;var statearr_16180_16261 = state_16177__$1;(statearr_16180_16261[2] = null);
(statearr_16180_16261[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 33))
{var inst_16139 = (state_16177[9]);var inst_16141 = cljs.core.chunked_seq_QMARK_.call(null,inst_16139);var state_16177__$1 = state_16177;if(inst_16141)
{var statearr_16181_16262 = state_16177__$1;(statearr_16181_16262[1] = 36);
} else
{var statearr_16182_16263 = state_16177__$1;(statearr_16182_16263[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 2))
{var state_16177__$1 = state_16177;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16177__$1,4,ch);
} else
{if((state_val_16178 === 34))
{var state_16177__$1 = state_16177;var statearr_16183_16264 = state_16177__$1;(statearr_16183_16264[2] = null);
(statearr_16183_16264[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 3))
{var inst_16175 = (state_16177[2]);var state_16177__$1 = state_16177;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16177__$1,inst_16175);
} else
{if((state_val_16178 === 35))
{var inst_16164 = (state_16177[2]);var state_16177__$1 = state_16177;var statearr_16184_16265 = state_16177__$1;(statearr_16184_16265[2] = inst_16164);
(statearr_16184_16265[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 4))
{var inst_16050 = (state_16177[7]);var inst_16050__$1 = (state_16177[2]);var inst_16051 = (inst_16050__$1 == null);var state_16177__$1 = (function (){var statearr_16185 = state_16177;(statearr_16185[7] = inst_16050__$1);
return statearr_16185;
})();if(cljs.core.truth_(inst_16051))
{var statearr_16186_16266 = state_16177__$1;(statearr_16186_16266[1] = 5);
} else
{var statearr_16187_16267 = state_16177__$1;(statearr_16187_16267[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 36))
{var inst_16139 = (state_16177[9]);var inst_16143 = cljs.core.chunk_first.call(null,inst_16139);var inst_16144 = cljs.core.chunk_rest.call(null,inst_16139);var inst_16145 = cljs.core.count.call(null,inst_16143);var inst_16118 = inst_16144;var inst_16119 = inst_16143;var inst_16120 = inst_16145;var inst_16121 = 0;var state_16177__$1 = (function (){var statearr_16188 = state_16177;(statearr_16188[10] = inst_16119);
(statearr_16188[11] = inst_16118);
(statearr_16188[12] = inst_16120);
(statearr_16188[13] = inst_16121);
return statearr_16188;
})();var statearr_16189_16268 = state_16177__$1;(statearr_16189_16268[2] = null);
(statearr_16189_16268[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 5))
{var inst_16057 = cljs.core.deref.call(null,cs);var inst_16058 = cljs.core.seq.call(null,inst_16057);var inst_16059 = inst_16058;var inst_16060 = null;var inst_16061 = 0;var inst_16062 = 0;var state_16177__$1 = (function (){var statearr_16190 = state_16177;(statearr_16190[14] = inst_16060);
(statearr_16190[15] = inst_16059);
(statearr_16190[16] = inst_16061);
(statearr_16190[17] = inst_16062);
return statearr_16190;
})();var statearr_16191_16269 = state_16177__$1;(statearr_16191_16269[2] = null);
(statearr_16191_16269[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 37))
{var inst_16139 = (state_16177[9]);var inst_16148 = cljs.core.first.call(null,inst_16139);var state_16177__$1 = (function (){var statearr_16192 = state_16177;(statearr_16192[18] = inst_16148);
return statearr_16192;
})();var statearr_16193_16270 = state_16177__$1;(statearr_16193_16270[2] = null);
(statearr_16193_16270[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 6))
{var inst_16109 = cljs.core.deref.call(null,cs);var inst_16110 = cljs.core.keys.call(null,inst_16109);var inst_16111 = cljs.core.count.call(null,inst_16110);var inst_16112 = cljs.core.reset_BANG_.call(null,dctr,inst_16111);var inst_16117 = cljs.core.seq.call(null,inst_16110);var inst_16118 = inst_16117;var inst_16119 = null;var inst_16120 = 0;var inst_16121 = 0;var state_16177__$1 = (function (){var statearr_16194 = state_16177;(statearr_16194[10] = inst_16119);
(statearr_16194[11] = inst_16118);
(statearr_16194[19] = inst_16112);
(statearr_16194[12] = inst_16120);
(statearr_16194[13] = inst_16121);
return statearr_16194;
})();var statearr_16195_16271 = state_16177__$1;(statearr_16195_16271[2] = null);
(statearr_16195_16271[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 38))
{var inst_16161 = (state_16177[2]);var state_16177__$1 = state_16177;var statearr_16196_16272 = state_16177__$1;(statearr_16196_16272[2] = inst_16161);
(statearr_16196_16272[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 7))
{var inst_16173 = (state_16177[2]);var state_16177__$1 = state_16177;var statearr_16197_16273 = state_16177__$1;(statearr_16197_16273[2] = inst_16173);
(statearr_16197_16273[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 39))
{var inst_16139 = (state_16177[9]);var inst_16157 = (state_16177[2]);var inst_16158 = cljs.core.next.call(null,inst_16139);var inst_16118 = inst_16158;var inst_16119 = null;var inst_16120 = 0;var inst_16121 = 0;var state_16177__$1 = (function (){var statearr_16198 = state_16177;(statearr_16198[10] = inst_16119);
(statearr_16198[11] = inst_16118);
(statearr_16198[20] = inst_16157);
(statearr_16198[12] = inst_16120);
(statearr_16198[13] = inst_16121);
return statearr_16198;
})();var statearr_16199_16274 = state_16177__$1;(statearr_16199_16274[2] = null);
(statearr_16199_16274[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 8))
{var inst_16061 = (state_16177[16]);var inst_16062 = (state_16177[17]);var inst_16064 = (inst_16062 < inst_16061);var inst_16065 = inst_16064;var state_16177__$1 = state_16177;if(cljs.core.truth_(inst_16065))
{var statearr_16200_16275 = state_16177__$1;(statearr_16200_16275[1] = 10);
} else
{var statearr_16201_16276 = state_16177__$1;(statearr_16201_16276[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 40))
{var inst_16148 = (state_16177[18]);var inst_16149 = (state_16177[2]);var inst_16150 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16151 = cljs.core.async.untap_STAR_.call(null,m,inst_16148);var state_16177__$1 = (function (){var statearr_16202 = state_16177;(statearr_16202[21] = inst_16149);
(statearr_16202[22] = inst_16150);
return statearr_16202;
})();var statearr_16203_16277 = state_16177__$1;(statearr_16203_16277[2] = inst_16151);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16177__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 9))
{var inst_16107 = (state_16177[2]);var state_16177__$1 = state_16177;var statearr_16204_16278 = state_16177__$1;(statearr_16204_16278[2] = inst_16107);
(statearr_16204_16278[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 41))
{var inst_16050 = (state_16177[7]);var inst_16148 = (state_16177[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16177,40,Object,null,39);var inst_16155 = cljs.core.async.put_BANG_.call(null,inst_16148,inst_16050,done);var state_16177__$1 = state_16177;var statearr_16205_16279 = state_16177__$1;(statearr_16205_16279[2] = inst_16155);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16177__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 10))
{var inst_16060 = (state_16177[14]);var inst_16062 = (state_16177[17]);var inst_16068 = cljs.core._nth.call(null,inst_16060,inst_16062);var inst_16069 = cljs.core.nth.call(null,inst_16068,0,null);var inst_16070 = cljs.core.nth.call(null,inst_16068,1,null);var state_16177__$1 = (function (){var statearr_16206 = state_16177;(statearr_16206[23] = inst_16069);
return statearr_16206;
})();if(cljs.core.truth_(inst_16070))
{var statearr_16207_16280 = state_16177__$1;(statearr_16207_16280[1] = 13);
} else
{var statearr_16208_16281 = state_16177__$1;(statearr_16208_16281[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 42))
{var inst_16170 = (state_16177[2]);var state_16177__$1 = (function (){var statearr_16209 = state_16177;(statearr_16209[24] = inst_16170);
return statearr_16209;
})();var statearr_16210_16282 = state_16177__$1;(statearr_16210_16282[2] = null);
(statearr_16210_16282[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 11))
{var inst_16079 = (state_16177[25]);var inst_16059 = (state_16177[15]);var inst_16079__$1 = cljs.core.seq.call(null,inst_16059);var state_16177__$1 = (function (){var statearr_16211 = state_16177;(statearr_16211[25] = inst_16079__$1);
return statearr_16211;
})();if(inst_16079__$1)
{var statearr_16212_16283 = state_16177__$1;(statearr_16212_16283[1] = 16);
} else
{var statearr_16213_16284 = state_16177__$1;(statearr_16213_16284[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 12))
{var inst_16105 = (state_16177[2]);var state_16177__$1 = state_16177;var statearr_16214_16285 = state_16177__$1;(statearr_16214_16285[2] = inst_16105);
(statearr_16214_16285[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 13))
{var inst_16069 = (state_16177[23]);var inst_16072 = cljs.core.async.close_BANG_.call(null,inst_16069);var state_16177__$1 = state_16177;var statearr_16218_16286 = state_16177__$1;(statearr_16218_16286[2] = inst_16072);
(statearr_16218_16286[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 14))
{var state_16177__$1 = state_16177;var statearr_16219_16287 = state_16177__$1;(statearr_16219_16287[2] = null);
(statearr_16219_16287[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 15))
{var inst_16060 = (state_16177[14]);var inst_16059 = (state_16177[15]);var inst_16061 = (state_16177[16]);var inst_16062 = (state_16177[17]);var inst_16075 = (state_16177[2]);var inst_16076 = (inst_16062 + 1);var tmp16215 = inst_16060;var tmp16216 = inst_16059;var tmp16217 = inst_16061;var inst_16059__$1 = tmp16216;var inst_16060__$1 = tmp16215;var inst_16061__$1 = tmp16217;var inst_16062__$1 = inst_16076;var state_16177__$1 = (function (){var statearr_16220 = state_16177;(statearr_16220[26] = inst_16075);
(statearr_16220[14] = inst_16060__$1);
(statearr_16220[15] = inst_16059__$1);
(statearr_16220[16] = inst_16061__$1);
(statearr_16220[17] = inst_16062__$1);
return statearr_16220;
})();var statearr_16221_16288 = state_16177__$1;(statearr_16221_16288[2] = null);
(statearr_16221_16288[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 16))
{var inst_16079 = (state_16177[25]);var inst_16081 = cljs.core.chunked_seq_QMARK_.call(null,inst_16079);var state_16177__$1 = state_16177;if(inst_16081)
{var statearr_16222_16289 = state_16177__$1;(statearr_16222_16289[1] = 19);
} else
{var statearr_16223_16290 = state_16177__$1;(statearr_16223_16290[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 17))
{var state_16177__$1 = state_16177;var statearr_16224_16291 = state_16177__$1;(statearr_16224_16291[2] = null);
(statearr_16224_16291[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 18))
{var inst_16103 = (state_16177[2]);var state_16177__$1 = state_16177;var statearr_16225_16292 = state_16177__$1;(statearr_16225_16292[2] = inst_16103);
(statearr_16225_16292[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 19))
{var inst_16079 = (state_16177[25]);var inst_16083 = cljs.core.chunk_first.call(null,inst_16079);var inst_16084 = cljs.core.chunk_rest.call(null,inst_16079);var inst_16085 = cljs.core.count.call(null,inst_16083);var inst_16059 = inst_16084;var inst_16060 = inst_16083;var inst_16061 = inst_16085;var inst_16062 = 0;var state_16177__$1 = (function (){var statearr_16226 = state_16177;(statearr_16226[14] = inst_16060);
(statearr_16226[15] = inst_16059);
(statearr_16226[16] = inst_16061);
(statearr_16226[17] = inst_16062);
return statearr_16226;
})();var statearr_16227_16293 = state_16177__$1;(statearr_16227_16293[2] = null);
(statearr_16227_16293[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 20))
{var inst_16079 = (state_16177[25]);var inst_16089 = cljs.core.first.call(null,inst_16079);var inst_16090 = cljs.core.nth.call(null,inst_16089,0,null);var inst_16091 = cljs.core.nth.call(null,inst_16089,1,null);var state_16177__$1 = (function (){var statearr_16228 = state_16177;(statearr_16228[27] = inst_16090);
return statearr_16228;
})();if(cljs.core.truth_(inst_16091))
{var statearr_16229_16294 = state_16177__$1;(statearr_16229_16294[1] = 22);
} else
{var statearr_16230_16295 = state_16177__$1;(statearr_16230_16295[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 21))
{var inst_16100 = (state_16177[2]);var state_16177__$1 = state_16177;var statearr_16231_16296 = state_16177__$1;(statearr_16231_16296[2] = inst_16100);
(statearr_16231_16296[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 22))
{var inst_16090 = (state_16177[27]);var inst_16093 = cljs.core.async.close_BANG_.call(null,inst_16090);var state_16177__$1 = state_16177;var statearr_16232_16297 = state_16177__$1;(statearr_16232_16297[2] = inst_16093);
(statearr_16232_16297[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 23))
{var state_16177__$1 = state_16177;var statearr_16233_16298 = state_16177__$1;(statearr_16233_16298[2] = null);
(statearr_16233_16298[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 24))
{var inst_16079 = (state_16177[25]);var inst_16096 = (state_16177[2]);var inst_16097 = cljs.core.next.call(null,inst_16079);var inst_16059 = inst_16097;var inst_16060 = null;var inst_16061 = 0;var inst_16062 = 0;var state_16177__$1 = (function (){var statearr_16234 = state_16177;(statearr_16234[28] = inst_16096);
(statearr_16234[14] = inst_16060);
(statearr_16234[15] = inst_16059);
(statearr_16234[16] = inst_16061);
(statearr_16234[17] = inst_16062);
return statearr_16234;
})();var statearr_16235_16299 = state_16177__$1;(statearr_16235_16299[2] = null);
(statearr_16235_16299[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 25))
{var inst_16120 = (state_16177[12]);var inst_16121 = (state_16177[13]);var inst_16123 = (inst_16121 < inst_16120);var inst_16124 = inst_16123;var state_16177__$1 = state_16177;if(cljs.core.truth_(inst_16124))
{var statearr_16236_16300 = state_16177__$1;(statearr_16236_16300[1] = 27);
} else
{var statearr_16237_16301 = state_16177__$1;(statearr_16237_16301[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 26))
{var inst_16168 = (state_16177[2]);var state_16177__$1 = (function (){var statearr_16238 = state_16177;(statearr_16238[29] = inst_16168);
return statearr_16238;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16177__$1,42,dchan);
} else
{if((state_val_16178 === 27))
{var inst_16119 = (state_16177[10]);var inst_16121 = (state_16177[13]);var inst_16126 = cljs.core._nth.call(null,inst_16119,inst_16121);var state_16177__$1 = (function (){var statearr_16239 = state_16177;(statearr_16239[8] = inst_16126);
return statearr_16239;
})();var statearr_16240_16302 = state_16177__$1;(statearr_16240_16302[2] = null);
(statearr_16240_16302[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 28))
{var inst_16118 = (state_16177[11]);var inst_16139 = (state_16177[9]);var inst_16139__$1 = cljs.core.seq.call(null,inst_16118);var state_16177__$1 = (function (){var statearr_16244 = state_16177;(statearr_16244[9] = inst_16139__$1);
return statearr_16244;
})();if(inst_16139__$1)
{var statearr_16245_16303 = state_16177__$1;(statearr_16245_16303[1] = 33);
} else
{var statearr_16246_16304 = state_16177__$1;(statearr_16246_16304[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 29))
{var inst_16166 = (state_16177[2]);var state_16177__$1 = state_16177;var statearr_16247_16305 = state_16177__$1;(statearr_16247_16305[2] = inst_16166);
(statearr_16247_16305[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 30))
{var inst_16119 = (state_16177[10]);var inst_16118 = (state_16177[11]);var inst_16120 = (state_16177[12]);var inst_16121 = (state_16177[13]);var inst_16135 = (state_16177[2]);var inst_16136 = (inst_16121 + 1);var tmp16241 = inst_16119;var tmp16242 = inst_16118;var tmp16243 = inst_16120;var inst_16118__$1 = tmp16242;var inst_16119__$1 = tmp16241;var inst_16120__$1 = tmp16243;var inst_16121__$1 = inst_16136;var state_16177__$1 = (function (){var statearr_16248 = state_16177;(statearr_16248[10] = inst_16119__$1);
(statearr_16248[11] = inst_16118__$1);
(statearr_16248[12] = inst_16120__$1);
(statearr_16248[13] = inst_16121__$1);
(statearr_16248[30] = inst_16135);
return statearr_16248;
})();var statearr_16249_16306 = state_16177__$1;(statearr_16249_16306[2] = null);
(statearr_16249_16306[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16178 === 31))
{var inst_16126 = (state_16177[8]);var inst_16127 = (state_16177[2]);var inst_16128 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16129 = cljs.core.async.untap_STAR_.call(null,m,inst_16126);var state_16177__$1 = (function (){var statearr_16250 = state_16177;(statearr_16250[31] = inst_16128);
(statearr_16250[32] = inst_16127);
return statearr_16250;
})();var statearr_16251_16307 = state_16177__$1;(statearr_16251_16307[2] = inst_16129);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16177__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5754__auto__){
return (function() {
var state_machine__5755__auto__ = null;
var state_machine__5755__auto____0 = (function (){var statearr_16255 = (new Array(33));(statearr_16255[0] = state_machine__5755__auto__);
(statearr_16255[1] = 1);
return statearr_16255;
});
var state_machine__5755__auto____1 = (function (state_16177){while(true){
var ret_value__5756__auto__ = (function (){try{while(true){
var result__5757__auto__ = switch__5754__auto__.call(null,state_16177);if(cljs.core.keyword_identical_QMARK_.call(null,result__5757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5757__auto__;
}
break;
}
}catch (e16256){if((e16256 instanceof Object))
{var ex__5758__auto__ = e16256;var statearr_16257_16308 = state_16177;(statearr_16257_16308[5] = ex__5758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16177);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16256;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16309 = state_16177;
state_16177 = G__16309;
continue;
}
} else
{return ret_value__5756__auto__;
}
break;
}
});
state_machine__5755__auto__ = function(state_16177){
switch(arguments.length){
case 0:
return state_machine__5755__auto____0.call(this);
case 1:
return state_machine__5755__auto____1.call(this,state_16177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5755__auto____0;
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5755__auto____1;
return state_machine__5755__auto__;
})()
;})(switch__5754__auto__))
})();var state__5826__auto__ = (function (){var statearr_16258 = f__5825__auto__.call(null);(statearr_16258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5824__auto___16259);
return statearr_16258;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5826__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj16311 = {};return obj16311;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3281__auto__ = m;if(and__3281__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3281__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3896__auto__ = (((m == null))?null:m);return (function (){var or__3293__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3896__auto__)]);if(or__3293__auto__)
{return or__3293__auto__;
} else
{var or__3293__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3293__auto____$1)
{return or__3293__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3281__auto__ = m;if(and__3281__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3281__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3896__auto__ = (((m == null))?null:m);return (function (){var or__3293__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3896__auto__)]);if(or__3293__auto__)
{return or__3293__auto__;
} else
{var or__3293__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3293__auto____$1)
{return or__3293__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3281__auto__ = m;if(and__3281__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3281__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3896__auto__ = (((m == null))?null:m);return (function (){var or__3293__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3896__auto__)]);if(or__3293__auto__)
{return or__3293__auto__;
} else
{var or__3293__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3293__auto____$1)
{return or__3293__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3281__auto__ = m;if(and__3281__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3281__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3896__auto__ = (((m == null))?null:m);return (function (){var or__3293__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3896__auto__)]);if(or__3293__auto__)
{return or__3293__auto__;
} else
{var or__3293__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3293__auto____$1)
{return or__3293__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3281__auto__ = m;if(and__3281__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3281__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3896__auto__ = (((m == null))?null:m);return (function (){var or__3293__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3896__auto__)]);if(or__3293__auto__)
{return or__3293__auto__;
} else
{var or__3293__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3293__auto____$1)
{return or__3293__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t16421 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16421 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta16422){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta16422 = meta16422;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16421.cljs$lang$type = true;
cljs.core.async.t16421.cljs$lang$ctorStr = "cljs.core.async/t16421";
cljs.core.async.t16421.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3837__auto__,writer__3838__auto__,opt__3839__auto__){return cljs.core._write.call(null,writer__3838__auto__,"cljs.core.async/t16421");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16421.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16421.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16421.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16421.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16421.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16421.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16421.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16421.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16421.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16423){var self__ = this;
var _16423__$1 = this;return self__.meta16422;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16423,meta16422__$1){var self__ = this;
var _16423__$1 = this;return (new cljs.core.async.t16421(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta16422__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16421 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16421(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16422){return (new cljs.core.async.t16421(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16422));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16421(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5824__auto___16530 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5825__auto__ = (function (){var switch__5754__auto__ = (function (state_16488){var state_val_16489 = (state_16488[1]);if((state_val_16489 === 1))
{var inst_16427 = (state_16488[7]);var inst_16427__$1 = calc_state.call(null);var inst_16428 = cljs.core.seq_QMARK_.call(null,inst_16427__$1);var state_16488__$1 = (function (){var statearr_16490 = state_16488;(statearr_16490[7] = inst_16427__$1);
return statearr_16490;
})();if(inst_16428)
{var statearr_16491_16531 = state_16488__$1;(statearr_16491_16531[1] = 2);
} else
{var statearr_16492_16532 = state_16488__$1;(statearr_16492_16532[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16489 === 2))
{var inst_16427 = (state_16488[7]);var inst_16430 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16427);var state_16488__$1 = state_16488;var statearr_16493_16533 = state_16488__$1;(statearr_16493_16533[2] = inst_16430);
(statearr_16493_16533[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16489 === 3))
{var inst_16427 = (state_16488[7]);var state_16488__$1 = state_16488;var statearr_16494_16534 = state_16488__$1;(statearr_16494_16534[2] = inst_16427);
(statearr_16494_16534[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16489 === 4))
{var inst_16427 = (state_16488[7]);var inst_16433 = (state_16488[2]);var inst_16434 = cljs.core.get.call(null,inst_16433,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16435 = cljs.core.get.call(null,inst_16433,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16436 = cljs.core.get.call(null,inst_16433,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_16437 = inst_16427;var state_16488__$1 = (function (){var statearr_16495 = state_16488;(statearr_16495[8] = inst_16437);
(statearr_16495[9] = inst_16436);
(statearr_16495[10] = inst_16435);
(statearr_16495[11] = inst_16434);
return statearr_16495;
})();var statearr_16496_16535 = state_16488__$1;(statearr_16496_16535[2] = null);
(statearr_16496_16535[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16489 === 5))
{var inst_16437 = (state_16488[8]);var inst_16440 = cljs.core.seq_QMARK_.call(null,inst_16437);var state_16488__$1 = state_16488;if(inst_16440)
{var statearr_16497_16536 = state_16488__$1;(statearr_16497_16536[1] = 7);
} else
{var statearr_16498_16537 = state_16488__$1;(statearr_16498_16537[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16489 === 6))
{var inst_16486 = (state_16488[2]);var state_16488__$1 = state_16488;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16488__$1,inst_16486);
} else
{if((state_val_16489 === 7))
{var inst_16437 = (state_16488[8]);var inst_16442 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16437);var state_16488__$1 = state_16488;var statearr_16499_16538 = state_16488__$1;(statearr_16499_16538[2] = inst_16442);
(statearr_16499_16538[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16489 === 8))
{var inst_16437 = (state_16488[8]);var state_16488__$1 = state_16488;var statearr_16500_16539 = state_16488__$1;(statearr_16500_16539[2] = inst_16437);
(statearr_16500_16539[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16489 === 9))
{var inst_16445 = (state_16488[12]);var inst_16445__$1 = (state_16488[2]);var inst_16446 = cljs.core.get.call(null,inst_16445__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16447 = cljs.core.get.call(null,inst_16445__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16448 = cljs.core.get.call(null,inst_16445__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_16488__$1 = (function (){var statearr_16501 = state_16488;(statearr_16501[12] = inst_16445__$1);
(statearr_16501[13] = inst_16448);
(statearr_16501[14] = inst_16447);
return statearr_16501;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16488__$1,10,inst_16446);
} else
{if((state_val_16489 === 10))
{var inst_16453 = (state_16488[15]);var inst_16452 = (state_16488[16]);var inst_16451 = (state_16488[2]);var inst_16452__$1 = cljs.core.nth.call(null,inst_16451,0,null);var inst_16453__$1 = cljs.core.nth.call(null,inst_16451,1,null);var inst_16454 = (inst_16452__$1 == null);var inst_16455 = cljs.core._EQ_.call(null,inst_16453__$1,change);var inst_16456 = (inst_16454) || (inst_16455);var state_16488__$1 = (function (){var statearr_16502 = state_16488;(statearr_16502[15] = inst_16453__$1);
(statearr_16502[16] = inst_16452__$1);
return statearr_16502;
})();if(cljs.core.truth_(inst_16456))
{var statearr_16503_16540 = state_16488__$1;(statearr_16503_16540[1] = 11);
} else
{var statearr_16504_16541 = state_16488__$1;(statearr_16504_16541[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16489 === 11))
{var inst_16452 = (state_16488[16]);var inst_16458 = (inst_16452 == null);var state_16488__$1 = state_16488;if(cljs.core.truth_(inst_16458))
{var statearr_16505_16542 = state_16488__$1;(statearr_16505_16542[1] = 14);
} else
{var statearr_16506_16543 = state_16488__$1;(statearr_16506_16543[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16489 === 12))
{var inst_16467 = (state_16488[17]);var inst_16453 = (state_16488[15]);var inst_16448 = (state_16488[13]);var inst_16467__$1 = inst_16448.call(null,inst_16453);var state_16488__$1 = (function (){var statearr_16507 = state_16488;(statearr_16507[17] = inst_16467__$1);
return statearr_16507;
})();if(cljs.core.truth_(inst_16467__$1))
{var statearr_16508_16544 = state_16488__$1;(statearr_16508_16544[1] = 17);
} else
{var statearr_16509_16545 = state_16488__$1;(statearr_16509_16545[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16489 === 13))
{var inst_16484 = (state_16488[2]);var state_16488__$1 = state_16488;var statearr_16510_16546 = state_16488__$1;(statearr_16510_16546[2] = inst_16484);
(statearr_16510_16546[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16489 === 14))
{var inst_16453 = (state_16488[15]);var inst_16460 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16453);var state_16488__$1 = state_16488;var statearr_16511_16547 = state_16488__$1;(statearr_16511_16547[2] = inst_16460);
(statearr_16511_16547[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16489 === 15))
{var state_16488__$1 = state_16488;var statearr_16512_16548 = state_16488__$1;(statearr_16512_16548[2] = null);
(statearr_16512_16548[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16489 === 16))
{var inst_16463 = (state_16488[2]);var inst_16464 = calc_state.call(null);var inst_16437 = inst_16464;var state_16488__$1 = (function (){var statearr_16513 = state_16488;(statearr_16513[8] = inst_16437);
(statearr_16513[18] = inst_16463);
return statearr_16513;
})();var statearr_16514_16549 = state_16488__$1;(statearr_16514_16549[2] = null);
(statearr_16514_16549[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16489 === 17))
{var inst_16467 = (state_16488[17]);var state_16488__$1 = state_16488;var statearr_16515_16550 = state_16488__$1;(statearr_16515_16550[2] = inst_16467);
(statearr_16515_16550[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16489 === 18))
{var inst_16453 = (state_16488[15]);var inst_16448 = (state_16488[13]);var inst_16447 = (state_16488[14]);var inst_16470 = cljs.core.empty_QMARK_.call(null,inst_16448);var inst_16471 = inst_16447.call(null,inst_16453);var inst_16472 = cljs.core.not.call(null,inst_16471);var inst_16473 = (inst_16470) && (inst_16472);var state_16488__$1 = state_16488;var statearr_16516_16551 = state_16488__$1;(statearr_16516_16551[2] = inst_16473);
(statearr_16516_16551[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16489 === 19))
{var inst_16475 = (state_16488[2]);var state_16488__$1 = state_16488;if(cljs.core.truth_(inst_16475))
{var statearr_16517_16552 = state_16488__$1;(statearr_16517_16552[1] = 20);
} else
{var statearr_16518_16553 = state_16488__$1;(statearr_16518_16553[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16489 === 20))
{var inst_16452 = (state_16488[16]);var state_16488__$1 = state_16488;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16488__$1,23,out,inst_16452);
} else
{if((state_val_16489 === 21))
{var state_16488__$1 = state_16488;var statearr_16519_16554 = state_16488__$1;(statearr_16519_16554[2] = null);
(statearr_16519_16554[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16489 === 22))
{var inst_16445 = (state_16488[12]);var inst_16481 = (state_16488[2]);var inst_16437 = inst_16445;var state_16488__$1 = (function (){var statearr_16520 = state_16488;(statearr_16520[8] = inst_16437);
(statearr_16520[19] = inst_16481);
return statearr_16520;
})();var statearr_16521_16555 = state_16488__$1;(statearr_16521_16555[2] = null);
(statearr_16521_16555[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16489 === 23))
{var inst_16478 = (state_16488[2]);var state_16488__$1 = state_16488;var statearr_16522_16556 = state_16488__$1;(statearr_16522_16556[2] = inst_16478);
(statearr_16522_16556[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5754__auto__){
return (function() {
var state_machine__5755__auto__ = null;
var state_machine__5755__auto____0 = (function (){var statearr_16526 = (new Array(20));(statearr_16526[0] = state_machine__5755__auto__);
(statearr_16526[1] = 1);
return statearr_16526;
});
var state_machine__5755__auto____1 = (function (state_16488){while(true){
var ret_value__5756__auto__ = (function (){try{while(true){
var result__5757__auto__ = switch__5754__auto__.call(null,state_16488);if(cljs.core.keyword_identical_QMARK_.call(null,result__5757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5757__auto__;
}
break;
}
}catch (e16527){if((e16527 instanceof Object))
{var ex__5758__auto__ = e16527;var statearr_16528_16557 = state_16488;(statearr_16528_16557[5] = ex__5758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16488);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16527;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16558 = state_16488;
state_16488 = G__16558;
continue;
}
} else
{return ret_value__5756__auto__;
}
break;
}
});
state_machine__5755__auto__ = function(state_16488){
switch(arguments.length){
case 0:
return state_machine__5755__auto____0.call(this);
case 1:
return state_machine__5755__auto____1.call(this,state_16488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5755__auto____0;
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5755__auto____1;
return state_machine__5755__auto__;
})()
;})(switch__5754__auto__))
})();var state__5826__auto__ = (function (){var statearr_16529 = f__5825__auto__.call(null);(statearr_16529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5824__auto___16530);
return statearr_16529;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5826__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj16560 = {};return obj16560;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3281__auto__ = p;if(and__3281__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3281__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3896__auto__ = (((p == null))?null:p);return (function (){var or__3293__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3896__auto__)]);if(or__3293__auto__)
{return or__3293__auto__;
} else
{var or__3293__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3293__auto____$1)
{return or__3293__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3281__auto__ = p;if(and__3281__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3281__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3896__auto__ = (((p == null))?null:p);return (function (){var or__3293__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3896__auto__)]);if(or__3293__auto__)
{return or__3293__auto__;
} else
{var or__3293__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3293__auto____$1)
{return or__3293__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3281__auto__ = p;if(and__3281__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3281__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3896__auto__ = (((p == null))?null:p);return (function (){var or__3293__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3896__auto__)]);if(or__3293__auto__)
{return or__3293__auto__;
} else
{var or__3293__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3293__auto____$1)
{return or__3293__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3281__auto__ = p;if(and__3281__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3281__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3896__auto__ = (((p == null))?null:p);return (function (){var or__3293__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3896__auto__)]);if(or__3293__auto__)
{return or__3293__auto__;
} else
{var or__3293__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3293__auto____$1)
{return or__3293__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3293__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3293__auto__))
{return or__3293__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3293__auto__,mults){
return (function (p1__16561_SHARP_){if(cljs.core.truth_(p1__16561_SHARP_.call(null,topic)))
{return p1__16561_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16561_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3293__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16686 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16686 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16687){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16687 = meta16687;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16686.cljs$lang$type = true;
cljs.core.async.t16686.cljs$lang$ctorStr = "cljs.core.async/t16686";
cljs.core.async.t16686.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3837__auto__,writer__3838__auto__,opt__3839__auto__){return cljs.core._write.call(null,writer__3838__auto__,"cljs.core.async/t16686");
});})(mults,ensure_mult))
;
cljs.core.async.t16686.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16686.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16686.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16686.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16686.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16686.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16686.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16686.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16688){var self__ = this;
var _16688__$1 = this;return self__.meta16687;
});})(mults,ensure_mult))
;
cljs.core.async.t16686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16688,meta16687__$1){var self__ = this;
var _16688__$1 = this;return (new cljs.core.async.t16686(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16687__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16686 = ((function (mults,ensure_mult){
return (function __GT_t16686(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16687){return (new cljs.core.async.t16686(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16687));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16686(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5824__auto___16810 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5825__auto__ = (function (){var switch__5754__auto__ = (function (state_16762){var state_val_16763 = (state_16762[1]);if((state_val_16763 === 1))
{var state_16762__$1 = state_16762;var statearr_16764_16811 = state_16762__$1;(statearr_16764_16811[2] = null);
(statearr_16764_16811[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16763 === 2))
{var state_16762__$1 = state_16762;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16762__$1,4,ch);
} else
{if((state_val_16763 === 3))
{var inst_16760 = (state_16762[2]);var state_16762__$1 = state_16762;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16762__$1,inst_16760);
} else
{if((state_val_16763 === 4))
{var inst_16691 = (state_16762[7]);var inst_16691__$1 = (state_16762[2]);var inst_16692 = (inst_16691__$1 == null);var state_16762__$1 = (function (){var statearr_16765 = state_16762;(statearr_16765[7] = inst_16691__$1);
return statearr_16765;
})();if(cljs.core.truth_(inst_16692))
{var statearr_16766_16812 = state_16762__$1;(statearr_16766_16812[1] = 5);
} else
{var statearr_16767_16813 = state_16762__$1;(statearr_16767_16813[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16763 === 5))
{var inst_16698 = cljs.core.deref.call(null,mults);var inst_16699 = cljs.core.vals.call(null,inst_16698);var inst_16700 = cljs.core.seq.call(null,inst_16699);var inst_16701 = inst_16700;var inst_16702 = null;var inst_16703 = 0;var inst_16704 = 0;var state_16762__$1 = (function (){var statearr_16768 = state_16762;(statearr_16768[8] = inst_16703);
(statearr_16768[9] = inst_16704);
(statearr_16768[10] = inst_16702);
(statearr_16768[11] = inst_16701);
return statearr_16768;
})();var statearr_16769_16814 = state_16762__$1;(statearr_16769_16814[2] = null);
(statearr_16769_16814[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16763 === 6))
{var inst_16741 = (state_16762[12]);var inst_16739 = (state_16762[13]);var inst_16691 = (state_16762[7]);var inst_16739__$1 = topic_fn.call(null,inst_16691);var inst_16740 = cljs.core.deref.call(null,mults);var inst_16741__$1 = cljs.core.get.call(null,inst_16740,inst_16739__$1);var state_16762__$1 = (function (){var statearr_16770 = state_16762;(statearr_16770[12] = inst_16741__$1);
(statearr_16770[13] = inst_16739__$1);
return statearr_16770;
})();if(cljs.core.truth_(inst_16741__$1))
{var statearr_16771_16815 = state_16762__$1;(statearr_16771_16815[1] = 19);
} else
{var statearr_16772_16816 = state_16762__$1;(statearr_16772_16816[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16763 === 7))
{var inst_16758 = (state_16762[2]);var state_16762__$1 = state_16762;var statearr_16773_16817 = state_16762__$1;(statearr_16773_16817[2] = inst_16758);
(statearr_16773_16817[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16763 === 8))
{var inst_16703 = (state_16762[8]);var inst_16704 = (state_16762[9]);var inst_16706 = (inst_16704 < inst_16703);var inst_16707 = inst_16706;var state_16762__$1 = state_16762;if(cljs.core.truth_(inst_16707))
{var statearr_16777_16818 = state_16762__$1;(statearr_16777_16818[1] = 10);
} else
{var statearr_16778_16819 = state_16762__$1;(statearr_16778_16819[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16763 === 9))
{var inst_16737 = (state_16762[2]);var state_16762__$1 = state_16762;var statearr_16779_16820 = state_16762__$1;(statearr_16779_16820[2] = inst_16737);
(statearr_16779_16820[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16763 === 10))
{var inst_16703 = (state_16762[8]);var inst_16704 = (state_16762[9]);var inst_16702 = (state_16762[10]);var inst_16701 = (state_16762[11]);var inst_16709 = cljs.core._nth.call(null,inst_16702,inst_16704);var inst_16710 = cljs.core.async.muxch_STAR_.call(null,inst_16709);var inst_16711 = cljs.core.async.close_BANG_.call(null,inst_16710);var inst_16712 = (inst_16704 + 1);var tmp16774 = inst_16703;var tmp16775 = inst_16702;var tmp16776 = inst_16701;var inst_16701__$1 = tmp16776;var inst_16702__$1 = tmp16775;var inst_16703__$1 = tmp16774;var inst_16704__$1 = inst_16712;var state_16762__$1 = (function (){var statearr_16780 = state_16762;(statearr_16780[8] = inst_16703__$1);
(statearr_16780[9] = inst_16704__$1);
(statearr_16780[14] = inst_16711);
(statearr_16780[10] = inst_16702__$1);
(statearr_16780[11] = inst_16701__$1);
return statearr_16780;
})();var statearr_16781_16821 = state_16762__$1;(statearr_16781_16821[2] = null);
(statearr_16781_16821[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16763 === 11))
{var inst_16701 = (state_16762[11]);var inst_16715 = (state_16762[15]);var inst_16715__$1 = cljs.core.seq.call(null,inst_16701);var state_16762__$1 = (function (){var statearr_16782 = state_16762;(statearr_16782[15] = inst_16715__$1);
return statearr_16782;
})();if(inst_16715__$1)
{var statearr_16783_16822 = state_16762__$1;(statearr_16783_16822[1] = 13);
} else
{var statearr_16784_16823 = state_16762__$1;(statearr_16784_16823[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16763 === 12))
{var inst_16735 = (state_16762[2]);var state_16762__$1 = state_16762;var statearr_16785_16824 = state_16762__$1;(statearr_16785_16824[2] = inst_16735);
(statearr_16785_16824[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16763 === 13))
{var inst_16715 = (state_16762[15]);var inst_16717 = cljs.core.chunked_seq_QMARK_.call(null,inst_16715);var state_16762__$1 = state_16762;if(inst_16717)
{var statearr_16786_16825 = state_16762__$1;(statearr_16786_16825[1] = 16);
} else
{var statearr_16787_16826 = state_16762__$1;(statearr_16787_16826[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16763 === 14))
{var state_16762__$1 = state_16762;var statearr_16788_16827 = state_16762__$1;(statearr_16788_16827[2] = null);
(statearr_16788_16827[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16763 === 15))
{var inst_16733 = (state_16762[2]);var state_16762__$1 = state_16762;var statearr_16789_16828 = state_16762__$1;(statearr_16789_16828[2] = inst_16733);
(statearr_16789_16828[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16763 === 16))
{var inst_16715 = (state_16762[15]);var inst_16719 = cljs.core.chunk_first.call(null,inst_16715);var inst_16720 = cljs.core.chunk_rest.call(null,inst_16715);var inst_16721 = cljs.core.count.call(null,inst_16719);var inst_16701 = inst_16720;var inst_16702 = inst_16719;var inst_16703 = inst_16721;var inst_16704 = 0;var state_16762__$1 = (function (){var statearr_16790 = state_16762;(statearr_16790[8] = inst_16703);
(statearr_16790[9] = inst_16704);
(statearr_16790[10] = inst_16702);
(statearr_16790[11] = inst_16701);
return statearr_16790;
})();var statearr_16791_16829 = state_16762__$1;(statearr_16791_16829[2] = null);
(statearr_16791_16829[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16763 === 17))
{var inst_16715 = (state_16762[15]);var inst_16724 = cljs.core.first.call(null,inst_16715);var inst_16725 = cljs.core.async.muxch_STAR_.call(null,inst_16724);var inst_16726 = cljs.core.async.close_BANG_.call(null,inst_16725);var inst_16727 = cljs.core.next.call(null,inst_16715);var inst_16701 = inst_16727;var inst_16702 = null;var inst_16703 = 0;var inst_16704 = 0;var state_16762__$1 = (function (){var statearr_16792 = state_16762;(statearr_16792[8] = inst_16703);
(statearr_16792[9] = inst_16704);
(statearr_16792[10] = inst_16702);
(statearr_16792[11] = inst_16701);
(statearr_16792[16] = inst_16726);
return statearr_16792;
})();var statearr_16793_16830 = state_16762__$1;(statearr_16793_16830[2] = null);
(statearr_16793_16830[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16763 === 18))
{var inst_16730 = (state_16762[2]);var state_16762__$1 = state_16762;var statearr_16794_16831 = state_16762__$1;(statearr_16794_16831[2] = inst_16730);
(statearr_16794_16831[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16763 === 19))
{var state_16762__$1 = state_16762;var statearr_16795_16832 = state_16762__$1;(statearr_16795_16832[2] = null);
(statearr_16795_16832[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16763 === 20))
{var state_16762__$1 = state_16762;var statearr_16796_16833 = state_16762__$1;(statearr_16796_16833[2] = null);
(statearr_16796_16833[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16763 === 21))
{var inst_16755 = (state_16762[2]);var state_16762__$1 = (function (){var statearr_16797 = state_16762;(statearr_16797[17] = inst_16755);
return statearr_16797;
})();var statearr_16798_16834 = state_16762__$1;(statearr_16798_16834[2] = null);
(statearr_16798_16834[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16763 === 22))
{var inst_16752 = (state_16762[2]);var state_16762__$1 = state_16762;var statearr_16799_16835 = state_16762__$1;(statearr_16799_16835[2] = inst_16752);
(statearr_16799_16835[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16763 === 23))
{var inst_16739 = (state_16762[13]);var inst_16743 = (state_16762[2]);var inst_16744 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16739);var state_16762__$1 = (function (){var statearr_16800 = state_16762;(statearr_16800[18] = inst_16743);
return statearr_16800;
})();var statearr_16801_16836 = state_16762__$1;(statearr_16801_16836[2] = inst_16744);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16762__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16763 === 24))
{var inst_16741 = (state_16762[12]);var inst_16691 = (state_16762[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16762,23,Object,null,22);var inst_16748 = cljs.core.async.muxch_STAR_.call(null,inst_16741);var state_16762__$1 = state_16762;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16762__$1,25,inst_16748,inst_16691);
} else
{if((state_val_16763 === 25))
{var inst_16750 = (state_16762[2]);var state_16762__$1 = state_16762;var statearr_16802_16837 = state_16762__$1;(statearr_16802_16837[2] = inst_16750);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16762__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5754__auto__){
return (function() {
var state_machine__5755__auto__ = null;
var state_machine__5755__auto____0 = (function (){var statearr_16806 = (new Array(19));(statearr_16806[0] = state_machine__5755__auto__);
(statearr_16806[1] = 1);
return statearr_16806;
});
var state_machine__5755__auto____1 = (function (state_16762){while(true){
var ret_value__5756__auto__ = (function (){try{while(true){
var result__5757__auto__ = switch__5754__auto__.call(null,state_16762);if(cljs.core.keyword_identical_QMARK_.call(null,result__5757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5757__auto__;
}
break;
}
}catch (e16807){if((e16807 instanceof Object))
{var ex__5758__auto__ = e16807;var statearr_16808_16838 = state_16762;(statearr_16808_16838[5] = ex__5758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16762);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16807;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16839 = state_16762;
state_16762 = G__16839;
continue;
}
} else
{return ret_value__5756__auto__;
}
break;
}
});
state_machine__5755__auto__ = function(state_16762){
switch(arguments.length){
case 0:
return state_machine__5755__auto____0.call(this);
case 1:
return state_machine__5755__auto____1.call(this,state_16762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5755__auto____0;
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5755__auto____1;
return state_machine__5755__auto__;
})()
;})(switch__5754__auto__))
})();var state__5826__auto__ = (function (){var statearr_16809 = f__5825__auto__.call(null);(statearr_16809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5824__auto___16810);
return statearr_16809;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5826__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5824__auto___16976 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5825__auto__ = (function (){var switch__5754__auto__ = (function (state_16946){var state_val_16947 = (state_16946[1]);if((state_val_16947 === 1))
{var state_16946__$1 = state_16946;var statearr_16948_16977 = state_16946__$1;(statearr_16948_16977[2] = null);
(statearr_16948_16977[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16947 === 2))
{var inst_16909 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16910 = 0;var state_16946__$1 = (function (){var statearr_16949 = state_16946;(statearr_16949[7] = inst_16910);
(statearr_16949[8] = inst_16909);
return statearr_16949;
})();var statearr_16950_16978 = state_16946__$1;(statearr_16950_16978[2] = null);
(statearr_16950_16978[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16947 === 3))
{var inst_16944 = (state_16946[2]);var state_16946__$1 = state_16946;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16946__$1,inst_16944);
} else
{if((state_val_16947 === 4))
{var inst_16910 = (state_16946[7]);var inst_16912 = (inst_16910 < cnt);var state_16946__$1 = state_16946;if(cljs.core.truth_(inst_16912))
{var statearr_16951_16979 = state_16946__$1;(statearr_16951_16979[1] = 6);
} else
{var statearr_16952_16980 = state_16946__$1;(statearr_16952_16980[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16947 === 5))
{var inst_16930 = (state_16946[2]);var state_16946__$1 = (function (){var statearr_16953 = state_16946;(statearr_16953[9] = inst_16930);
return statearr_16953;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16946__$1,12,dchan);
} else
{if((state_val_16947 === 6))
{var state_16946__$1 = state_16946;var statearr_16954_16981 = state_16946__$1;(statearr_16954_16981[2] = null);
(statearr_16954_16981[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16947 === 7))
{var state_16946__$1 = state_16946;var statearr_16955_16982 = state_16946__$1;(statearr_16955_16982[2] = null);
(statearr_16955_16982[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16947 === 8))
{var inst_16928 = (state_16946[2]);var state_16946__$1 = state_16946;var statearr_16956_16983 = state_16946__$1;(statearr_16956_16983[2] = inst_16928);
(statearr_16956_16983[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16947 === 9))
{var inst_16910 = (state_16946[7]);var inst_16923 = (state_16946[2]);var inst_16924 = (inst_16910 + 1);var inst_16910__$1 = inst_16924;var state_16946__$1 = (function (){var statearr_16957 = state_16946;(statearr_16957[7] = inst_16910__$1);
(statearr_16957[10] = inst_16923);
return statearr_16957;
})();var statearr_16958_16984 = state_16946__$1;(statearr_16958_16984[2] = null);
(statearr_16958_16984[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16947 === 10))
{var inst_16914 = (state_16946[2]);var inst_16915 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_16946__$1 = (function (){var statearr_16959 = state_16946;(statearr_16959[11] = inst_16914);
return statearr_16959;
})();var statearr_16960_16985 = state_16946__$1;(statearr_16960_16985[2] = inst_16915);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16946__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16947 === 11))
{var inst_16910 = (state_16946[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16946,10,Object,null,9);var inst_16919 = chs__$1.call(null,inst_16910);var inst_16920 = done.call(null,inst_16910);var inst_16921 = cljs.core.async.take_BANG_.call(null,inst_16919,inst_16920);var state_16946__$1 = state_16946;var statearr_16961_16986 = state_16946__$1;(statearr_16961_16986[2] = inst_16921);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16946__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16947 === 12))
{var inst_16932 = (state_16946[12]);var inst_16932__$1 = (state_16946[2]);var inst_16933 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16932__$1);var state_16946__$1 = (function (){var statearr_16962 = state_16946;(statearr_16962[12] = inst_16932__$1);
return statearr_16962;
})();if(cljs.core.truth_(inst_16933))
{var statearr_16963_16987 = state_16946__$1;(statearr_16963_16987[1] = 13);
} else
{var statearr_16964_16988 = state_16946__$1;(statearr_16964_16988[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16947 === 13))
{var inst_16935 = cljs.core.async.close_BANG_.call(null,out);var state_16946__$1 = state_16946;var statearr_16965_16989 = state_16946__$1;(statearr_16965_16989[2] = inst_16935);
(statearr_16965_16989[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16947 === 14))
{var inst_16932 = (state_16946[12]);var inst_16937 = cljs.core.apply.call(null,f,inst_16932);var state_16946__$1 = state_16946;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16946__$1,16,out,inst_16937);
} else
{if((state_val_16947 === 15))
{var inst_16942 = (state_16946[2]);var state_16946__$1 = state_16946;var statearr_16966_16990 = state_16946__$1;(statearr_16966_16990[2] = inst_16942);
(statearr_16966_16990[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16947 === 16))
{var inst_16939 = (state_16946[2]);var state_16946__$1 = (function (){var statearr_16967 = state_16946;(statearr_16967[13] = inst_16939);
return statearr_16967;
})();var statearr_16968_16991 = state_16946__$1;(statearr_16968_16991[2] = null);
(statearr_16968_16991[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5754__auto__){
return (function() {
var state_machine__5755__auto__ = null;
var state_machine__5755__auto____0 = (function (){var statearr_16972 = (new Array(14));(statearr_16972[0] = state_machine__5755__auto__);
(statearr_16972[1] = 1);
return statearr_16972;
});
var state_machine__5755__auto____1 = (function (state_16946){while(true){
var ret_value__5756__auto__ = (function (){try{while(true){
var result__5757__auto__ = switch__5754__auto__.call(null,state_16946);if(cljs.core.keyword_identical_QMARK_.call(null,result__5757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5757__auto__;
}
break;
}
}catch (e16973){if((e16973 instanceof Object))
{var ex__5758__auto__ = e16973;var statearr_16974_16992 = state_16946;(statearr_16974_16992[5] = ex__5758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16946);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16973;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16993 = state_16946;
state_16946 = G__16993;
continue;
}
} else
{return ret_value__5756__auto__;
}
break;
}
});
state_machine__5755__auto__ = function(state_16946){
switch(arguments.length){
case 0:
return state_machine__5755__auto____0.call(this);
case 1:
return state_machine__5755__auto____1.call(this,state_16946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5755__auto____0;
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5755__auto____1;
return state_machine__5755__auto__;
})()
;})(switch__5754__auto__))
})();var state__5826__auto__ = (function (){var statearr_16975 = f__5825__auto__.call(null);(statearr_16975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5824__auto___16976);
return statearr_16975;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5826__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5824__auto___17101 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5825__auto__ = (function (){var switch__5754__auto__ = (function (state_17077){var state_val_17078 = (state_17077[1]);if((state_val_17078 === 1))
{var inst_17048 = cljs.core.vec.call(null,chs);var inst_17049 = inst_17048;var state_17077__$1 = (function (){var statearr_17079 = state_17077;(statearr_17079[7] = inst_17049);
return statearr_17079;
})();var statearr_17080_17102 = state_17077__$1;(statearr_17080_17102[2] = null);
(statearr_17080_17102[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17078 === 2))
{var inst_17049 = (state_17077[7]);var inst_17051 = cljs.core.count.call(null,inst_17049);var inst_17052 = (inst_17051 > 0);var state_17077__$1 = state_17077;if(cljs.core.truth_(inst_17052))
{var statearr_17081_17103 = state_17077__$1;(statearr_17081_17103[1] = 4);
} else
{var statearr_17082_17104 = state_17077__$1;(statearr_17082_17104[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17078 === 3))
{var inst_17075 = (state_17077[2]);var state_17077__$1 = state_17077;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17077__$1,inst_17075);
} else
{if((state_val_17078 === 4))
{var inst_17049 = (state_17077[7]);var state_17077__$1 = state_17077;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17077__$1,7,inst_17049);
} else
{if((state_val_17078 === 5))
{var inst_17071 = cljs.core.async.close_BANG_.call(null,out);var state_17077__$1 = state_17077;var statearr_17083_17105 = state_17077__$1;(statearr_17083_17105[2] = inst_17071);
(statearr_17083_17105[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17078 === 6))
{var inst_17073 = (state_17077[2]);var state_17077__$1 = state_17077;var statearr_17084_17106 = state_17077__$1;(statearr_17084_17106[2] = inst_17073);
(statearr_17084_17106[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17078 === 7))
{var inst_17057 = (state_17077[8]);var inst_17056 = (state_17077[9]);var inst_17056__$1 = (state_17077[2]);var inst_17057__$1 = cljs.core.nth.call(null,inst_17056__$1,0,null);var inst_17058 = cljs.core.nth.call(null,inst_17056__$1,1,null);var inst_17059 = (inst_17057__$1 == null);var state_17077__$1 = (function (){var statearr_17085 = state_17077;(statearr_17085[10] = inst_17058);
(statearr_17085[8] = inst_17057__$1);
(statearr_17085[9] = inst_17056__$1);
return statearr_17085;
})();if(cljs.core.truth_(inst_17059))
{var statearr_17086_17107 = state_17077__$1;(statearr_17086_17107[1] = 8);
} else
{var statearr_17087_17108 = state_17077__$1;(statearr_17087_17108[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17078 === 8))
{var inst_17049 = (state_17077[7]);var inst_17058 = (state_17077[10]);var inst_17057 = (state_17077[8]);var inst_17056 = (state_17077[9]);var inst_17061 = (function (){var c = inst_17058;var v = inst_17057;var vec__17054 = inst_17056;var cs = inst_17049;return ((function (c,v,vec__17054,cs,inst_17049,inst_17058,inst_17057,inst_17056,state_val_17078){
return (function (p1__16994_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__16994_SHARP_);
});
;})(c,v,vec__17054,cs,inst_17049,inst_17058,inst_17057,inst_17056,state_val_17078))
})();var inst_17062 = cljs.core.filterv.call(null,inst_17061,inst_17049);var inst_17049__$1 = inst_17062;var state_17077__$1 = (function (){var statearr_17088 = state_17077;(statearr_17088[7] = inst_17049__$1);
return statearr_17088;
})();var statearr_17089_17109 = state_17077__$1;(statearr_17089_17109[2] = null);
(statearr_17089_17109[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17078 === 9))
{var inst_17057 = (state_17077[8]);var state_17077__$1 = state_17077;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17077__$1,11,out,inst_17057);
} else
{if((state_val_17078 === 10))
{var inst_17069 = (state_17077[2]);var state_17077__$1 = state_17077;var statearr_17091_17110 = state_17077__$1;(statearr_17091_17110[2] = inst_17069);
(statearr_17091_17110[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17078 === 11))
{var inst_17049 = (state_17077[7]);var inst_17066 = (state_17077[2]);var tmp17090 = inst_17049;var inst_17049__$1 = tmp17090;var state_17077__$1 = (function (){var statearr_17092 = state_17077;(statearr_17092[7] = inst_17049__$1);
(statearr_17092[11] = inst_17066);
return statearr_17092;
})();var statearr_17093_17111 = state_17077__$1;(statearr_17093_17111[2] = null);
(statearr_17093_17111[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5754__auto__){
return (function() {
var state_machine__5755__auto__ = null;
var state_machine__5755__auto____0 = (function (){var statearr_17097 = (new Array(12));(statearr_17097[0] = state_machine__5755__auto__);
(statearr_17097[1] = 1);
return statearr_17097;
});
var state_machine__5755__auto____1 = (function (state_17077){while(true){
var ret_value__5756__auto__ = (function (){try{while(true){
var result__5757__auto__ = switch__5754__auto__.call(null,state_17077);if(cljs.core.keyword_identical_QMARK_.call(null,result__5757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5757__auto__;
}
break;
}
}catch (e17098){if((e17098 instanceof Object))
{var ex__5758__auto__ = e17098;var statearr_17099_17112 = state_17077;(statearr_17099_17112[5] = ex__5758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17077);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17098;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17113 = state_17077;
state_17077 = G__17113;
continue;
}
} else
{return ret_value__5756__auto__;
}
break;
}
});
state_machine__5755__auto__ = function(state_17077){
switch(arguments.length){
case 0:
return state_machine__5755__auto____0.call(this);
case 1:
return state_machine__5755__auto____1.call(this,state_17077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5755__auto____0;
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5755__auto____1;
return state_machine__5755__auto__;
})()
;})(switch__5754__auto__))
})();var state__5826__auto__ = (function (){var statearr_17100 = f__5825__auto__.call(null);(statearr_17100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5824__auto___17101);
return statearr_17100;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5826__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5824__auto___17206 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5825__auto__ = (function (){var switch__5754__auto__ = (function (state_17183){var state_val_17184 = (state_17183[1]);if((state_val_17184 === 1))
{var inst_17160 = 0;var state_17183__$1 = (function (){var statearr_17185 = state_17183;(statearr_17185[7] = inst_17160);
return statearr_17185;
})();var statearr_17186_17207 = state_17183__$1;(statearr_17186_17207[2] = null);
(statearr_17186_17207[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17184 === 2))
{var inst_17160 = (state_17183[7]);var inst_17162 = (inst_17160 < n);var state_17183__$1 = state_17183;if(cljs.core.truth_(inst_17162))
{var statearr_17187_17208 = state_17183__$1;(statearr_17187_17208[1] = 4);
} else
{var statearr_17188_17209 = state_17183__$1;(statearr_17188_17209[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17184 === 3))
{var inst_17180 = (state_17183[2]);var inst_17181 = cljs.core.async.close_BANG_.call(null,out);var state_17183__$1 = (function (){var statearr_17189 = state_17183;(statearr_17189[8] = inst_17180);
return statearr_17189;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17183__$1,inst_17181);
} else
{if((state_val_17184 === 4))
{var state_17183__$1 = state_17183;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17183__$1,7,ch);
} else
{if((state_val_17184 === 5))
{var state_17183__$1 = state_17183;var statearr_17190_17210 = state_17183__$1;(statearr_17190_17210[2] = null);
(statearr_17190_17210[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17184 === 6))
{var inst_17178 = (state_17183[2]);var state_17183__$1 = state_17183;var statearr_17191_17211 = state_17183__$1;(statearr_17191_17211[2] = inst_17178);
(statearr_17191_17211[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17184 === 7))
{var inst_17165 = (state_17183[9]);var inst_17165__$1 = (state_17183[2]);var inst_17166 = (inst_17165__$1 == null);var inst_17167 = cljs.core.not.call(null,inst_17166);var state_17183__$1 = (function (){var statearr_17192 = state_17183;(statearr_17192[9] = inst_17165__$1);
return statearr_17192;
})();if(inst_17167)
{var statearr_17193_17212 = state_17183__$1;(statearr_17193_17212[1] = 8);
} else
{var statearr_17194_17213 = state_17183__$1;(statearr_17194_17213[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17184 === 8))
{var inst_17165 = (state_17183[9]);var state_17183__$1 = state_17183;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17183__$1,11,out,inst_17165);
} else
{if((state_val_17184 === 9))
{var state_17183__$1 = state_17183;var statearr_17195_17214 = state_17183__$1;(statearr_17195_17214[2] = null);
(statearr_17195_17214[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17184 === 10))
{var inst_17175 = (state_17183[2]);var state_17183__$1 = state_17183;var statearr_17196_17215 = state_17183__$1;(statearr_17196_17215[2] = inst_17175);
(statearr_17196_17215[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17184 === 11))
{var inst_17160 = (state_17183[7]);var inst_17170 = (state_17183[2]);var inst_17171 = (inst_17160 + 1);var inst_17160__$1 = inst_17171;var state_17183__$1 = (function (){var statearr_17197 = state_17183;(statearr_17197[10] = inst_17170);
(statearr_17197[7] = inst_17160__$1);
return statearr_17197;
})();var statearr_17198_17216 = state_17183__$1;(statearr_17198_17216[2] = null);
(statearr_17198_17216[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5754__auto__){
return (function() {
var state_machine__5755__auto__ = null;
var state_machine__5755__auto____0 = (function (){var statearr_17202 = (new Array(11));(statearr_17202[0] = state_machine__5755__auto__);
(statearr_17202[1] = 1);
return statearr_17202;
});
var state_machine__5755__auto____1 = (function (state_17183){while(true){
var ret_value__5756__auto__ = (function (){try{while(true){
var result__5757__auto__ = switch__5754__auto__.call(null,state_17183);if(cljs.core.keyword_identical_QMARK_.call(null,result__5757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5757__auto__;
}
break;
}
}catch (e17203){if((e17203 instanceof Object))
{var ex__5758__auto__ = e17203;var statearr_17204_17217 = state_17183;(statearr_17204_17217[5] = ex__5758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17183);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17203;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17218 = state_17183;
state_17183 = G__17218;
continue;
}
} else
{return ret_value__5756__auto__;
}
break;
}
});
state_machine__5755__auto__ = function(state_17183){
switch(arguments.length){
case 0:
return state_machine__5755__auto____0.call(this);
case 1:
return state_machine__5755__auto____1.call(this,state_17183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5755__auto____0;
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5755__auto____1;
return state_machine__5755__auto__;
})()
;})(switch__5754__auto__))
})();var state__5826__auto__ = (function (){var statearr_17205 = f__5825__auto__.call(null);(statearr_17205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5824__auto___17206);
return statearr_17205;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5826__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5824__auto___17315 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5825__auto__ = (function (){var switch__5754__auto__ = (function (state_17290){var state_val_17291 = (state_17290[1]);if((state_val_17291 === 1))
{var inst_17267 = null;var state_17290__$1 = (function (){var statearr_17292 = state_17290;(statearr_17292[7] = inst_17267);
return statearr_17292;
})();var statearr_17293_17316 = state_17290__$1;(statearr_17293_17316[2] = null);
(statearr_17293_17316[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17291 === 2))
{var state_17290__$1 = state_17290;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17290__$1,4,ch);
} else
{if((state_val_17291 === 3))
{var inst_17287 = (state_17290[2]);var inst_17288 = cljs.core.async.close_BANG_.call(null,out);var state_17290__$1 = (function (){var statearr_17294 = state_17290;(statearr_17294[8] = inst_17287);
return statearr_17294;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17290__$1,inst_17288);
} else
{if((state_val_17291 === 4))
{var inst_17270 = (state_17290[9]);var inst_17270__$1 = (state_17290[2]);var inst_17271 = (inst_17270__$1 == null);var inst_17272 = cljs.core.not.call(null,inst_17271);var state_17290__$1 = (function (){var statearr_17295 = state_17290;(statearr_17295[9] = inst_17270__$1);
return statearr_17295;
})();if(inst_17272)
{var statearr_17296_17317 = state_17290__$1;(statearr_17296_17317[1] = 5);
} else
{var statearr_17297_17318 = state_17290__$1;(statearr_17297_17318[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17291 === 5))
{var inst_17270 = (state_17290[9]);var inst_17267 = (state_17290[7]);var inst_17274 = cljs.core._EQ_.call(null,inst_17270,inst_17267);var state_17290__$1 = state_17290;if(inst_17274)
{var statearr_17298_17319 = state_17290__$1;(statearr_17298_17319[1] = 8);
} else
{var statearr_17299_17320 = state_17290__$1;(statearr_17299_17320[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17291 === 6))
{var state_17290__$1 = state_17290;var statearr_17301_17321 = state_17290__$1;(statearr_17301_17321[2] = null);
(statearr_17301_17321[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17291 === 7))
{var inst_17285 = (state_17290[2]);var state_17290__$1 = state_17290;var statearr_17302_17322 = state_17290__$1;(statearr_17302_17322[2] = inst_17285);
(statearr_17302_17322[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17291 === 8))
{var inst_17267 = (state_17290[7]);var tmp17300 = inst_17267;var inst_17267__$1 = tmp17300;var state_17290__$1 = (function (){var statearr_17303 = state_17290;(statearr_17303[7] = inst_17267__$1);
return statearr_17303;
})();var statearr_17304_17323 = state_17290__$1;(statearr_17304_17323[2] = null);
(statearr_17304_17323[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17291 === 9))
{var inst_17270 = (state_17290[9]);var state_17290__$1 = state_17290;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17290__$1,11,out,inst_17270);
} else
{if((state_val_17291 === 10))
{var inst_17282 = (state_17290[2]);var state_17290__$1 = state_17290;var statearr_17305_17324 = state_17290__$1;(statearr_17305_17324[2] = inst_17282);
(statearr_17305_17324[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17291 === 11))
{var inst_17270 = (state_17290[9]);var inst_17279 = (state_17290[2]);var inst_17267 = inst_17270;var state_17290__$1 = (function (){var statearr_17306 = state_17290;(statearr_17306[10] = inst_17279);
(statearr_17306[7] = inst_17267);
return statearr_17306;
})();var statearr_17307_17325 = state_17290__$1;(statearr_17307_17325[2] = null);
(statearr_17307_17325[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5754__auto__){
return (function() {
var state_machine__5755__auto__ = null;
var state_machine__5755__auto____0 = (function (){var statearr_17311 = (new Array(11));(statearr_17311[0] = state_machine__5755__auto__);
(statearr_17311[1] = 1);
return statearr_17311;
});
var state_machine__5755__auto____1 = (function (state_17290){while(true){
var ret_value__5756__auto__ = (function (){try{while(true){
var result__5757__auto__ = switch__5754__auto__.call(null,state_17290);if(cljs.core.keyword_identical_QMARK_.call(null,result__5757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5757__auto__;
}
break;
}
}catch (e17312){if((e17312 instanceof Object))
{var ex__5758__auto__ = e17312;var statearr_17313_17326 = state_17290;(statearr_17313_17326[5] = ex__5758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17290);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17312;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17327 = state_17290;
state_17290 = G__17327;
continue;
}
} else
{return ret_value__5756__auto__;
}
break;
}
});
state_machine__5755__auto__ = function(state_17290){
switch(arguments.length){
case 0:
return state_machine__5755__auto____0.call(this);
case 1:
return state_machine__5755__auto____1.call(this,state_17290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5755__auto____0;
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5755__auto____1;
return state_machine__5755__auto__;
})()
;})(switch__5754__auto__))
})();var state__5826__auto__ = (function (){var statearr_17314 = f__5825__auto__.call(null);(statearr_17314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5824__auto___17315);
return statearr_17314;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5826__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5824__auto___17462 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5825__auto__ = (function (){var switch__5754__auto__ = (function (state_17432){var state_val_17433 = (state_17432[1]);if((state_val_17433 === 1))
{var inst_17395 = (new Array(n));var inst_17396 = inst_17395;var inst_17397 = 0;var state_17432__$1 = (function (){var statearr_17434 = state_17432;(statearr_17434[7] = inst_17396);
(statearr_17434[8] = inst_17397);
return statearr_17434;
})();var statearr_17435_17463 = state_17432__$1;(statearr_17435_17463[2] = null);
(statearr_17435_17463[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17433 === 2))
{var state_17432__$1 = state_17432;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17432__$1,4,ch);
} else
{if((state_val_17433 === 3))
{var inst_17430 = (state_17432[2]);var state_17432__$1 = state_17432;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17432__$1,inst_17430);
} else
{if((state_val_17433 === 4))
{var inst_17400 = (state_17432[9]);var inst_17400__$1 = (state_17432[2]);var inst_17401 = (inst_17400__$1 == null);var inst_17402 = cljs.core.not.call(null,inst_17401);var state_17432__$1 = (function (){var statearr_17436 = state_17432;(statearr_17436[9] = inst_17400__$1);
return statearr_17436;
})();if(inst_17402)
{var statearr_17437_17464 = state_17432__$1;(statearr_17437_17464[1] = 5);
} else
{var statearr_17438_17465 = state_17432__$1;(statearr_17438_17465[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17433 === 5))
{var inst_17396 = (state_17432[7]);var inst_17405 = (state_17432[10]);var inst_17397 = (state_17432[8]);var inst_17400 = (state_17432[9]);var inst_17404 = (inst_17396[inst_17397] = inst_17400);var inst_17405__$1 = (inst_17397 + 1);var inst_17406 = (inst_17405__$1 < n);var state_17432__$1 = (function (){var statearr_17439 = state_17432;(statearr_17439[10] = inst_17405__$1);
(statearr_17439[11] = inst_17404);
return statearr_17439;
})();if(cljs.core.truth_(inst_17406))
{var statearr_17440_17466 = state_17432__$1;(statearr_17440_17466[1] = 8);
} else
{var statearr_17441_17467 = state_17432__$1;(statearr_17441_17467[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17433 === 6))
{var inst_17397 = (state_17432[8]);var inst_17418 = (inst_17397 > 0);var state_17432__$1 = state_17432;if(cljs.core.truth_(inst_17418))
{var statearr_17443_17468 = state_17432__$1;(statearr_17443_17468[1] = 12);
} else
{var statearr_17444_17469 = state_17432__$1;(statearr_17444_17469[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17433 === 7))
{var inst_17428 = (state_17432[2]);var state_17432__$1 = state_17432;var statearr_17445_17470 = state_17432__$1;(statearr_17445_17470[2] = inst_17428);
(statearr_17445_17470[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17433 === 8))
{var inst_17396 = (state_17432[7]);var inst_17405 = (state_17432[10]);var tmp17442 = inst_17396;var inst_17396__$1 = tmp17442;var inst_17397 = inst_17405;var state_17432__$1 = (function (){var statearr_17446 = state_17432;(statearr_17446[7] = inst_17396__$1);
(statearr_17446[8] = inst_17397);
return statearr_17446;
})();var statearr_17447_17471 = state_17432__$1;(statearr_17447_17471[2] = null);
(statearr_17447_17471[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17433 === 9))
{var inst_17396 = (state_17432[7]);var inst_17410 = cljs.core.vec.call(null,inst_17396);var state_17432__$1 = state_17432;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17432__$1,11,out,inst_17410);
} else
{if((state_val_17433 === 10))
{var inst_17416 = (state_17432[2]);var state_17432__$1 = state_17432;var statearr_17448_17472 = state_17432__$1;(statearr_17448_17472[2] = inst_17416);
(statearr_17448_17472[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17433 === 11))
{var inst_17412 = (state_17432[2]);var inst_17413 = (new Array(n));var inst_17396 = inst_17413;var inst_17397 = 0;var state_17432__$1 = (function (){var statearr_17449 = state_17432;(statearr_17449[7] = inst_17396);
(statearr_17449[8] = inst_17397);
(statearr_17449[12] = inst_17412);
return statearr_17449;
})();var statearr_17450_17473 = state_17432__$1;(statearr_17450_17473[2] = null);
(statearr_17450_17473[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17433 === 12))
{var inst_17396 = (state_17432[7]);var inst_17420 = cljs.core.vec.call(null,inst_17396);var state_17432__$1 = state_17432;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17432__$1,15,out,inst_17420);
} else
{if((state_val_17433 === 13))
{var state_17432__$1 = state_17432;var statearr_17451_17474 = state_17432__$1;(statearr_17451_17474[2] = null);
(statearr_17451_17474[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17433 === 14))
{var inst_17425 = (state_17432[2]);var inst_17426 = cljs.core.async.close_BANG_.call(null,out);var state_17432__$1 = (function (){var statearr_17452 = state_17432;(statearr_17452[13] = inst_17425);
return statearr_17452;
})();var statearr_17453_17475 = state_17432__$1;(statearr_17453_17475[2] = inst_17426);
(statearr_17453_17475[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17433 === 15))
{var inst_17422 = (state_17432[2]);var state_17432__$1 = state_17432;var statearr_17454_17476 = state_17432__$1;(statearr_17454_17476[2] = inst_17422);
(statearr_17454_17476[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5754__auto__){
return (function() {
var state_machine__5755__auto__ = null;
var state_machine__5755__auto____0 = (function (){var statearr_17458 = (new Array(14));(statearr_17458[0] = state_machine__5755__auto__);
(statearr_17458[1] = 1);
return statearr_17458;
});
var state_machine__5755__auto____1 = (function (state_17432){while(true){
var ret_value__5756__auto__ = (function (){try{while(true){
var result__5757__auto__ = switch__5754__auto__.call(null,state_17432);if(cljs.core.keyword_identical_QMARK_.call(null,result__5757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5757__auto__;
}
break;
}
}catch (e17459){if((e17459 instanceof Object))
{var ex__5758__auto__ = e17459;var statearr_17460_17477 = state_17432;(statearr_17460_17477[5] = ex__5758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17432);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17459;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17478 = state_17432;
state_17432 = G__17478;
continue;
}
} else
{return ret_value__5756__auto__;
}
break;
}
});
state_machine__5755__auto__ = function(state_17432){
switch(arguments.length){
case 0:
return state_machine__5755__auto____0.call(this);
case 1:
return state_machine__5755__auto____1.call(this,state_17432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5755__auto____0;
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5755__auto____1;
return state_machine__5755__auto__;
})()
;})(switch__5754__auto__))
})();var state__5826__auto__ = (function (){var statearr_17461 = f__5825__auto__.call(null);(statearr_17461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5824__auto___17462);
return statearr_17461;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5826__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5824__auto___17621 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5825__auto__ = (function (){var switch__5754__auto__ = (function (state_17591){var state_val_17592 = (state_17591[1]);if((state_val_17592 === 1))
{var inst_17550 = (new Array(0));var inst_17551 = inst_17550;var inst_17552 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_17591__$1 = (function (){var statearr_17593 = state_17591;(statearr_17593[7] = inst_17552);
(statearr_17593[8] = inst_17551);
return statearr_17593;
})();var statearr_17594_17622 = state_17591__$1;(statearr_17594_17622[2] = null);
(statearr_17594_17622[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17592 === 2))
{var state_17591__$1 = state_17591;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17591__$1,4,ch);
} else
{if((state_val_17592 === 3))
{var inst_17589 = (state_17591[2]);var state_17591__$1 = state_17591;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17591__$1,inst_17589);
} else
{if((state_val_17592 === 4))
{var inst_17555 = (state_17591[9]);var inst_17555__$1 = (state_17591[2]);var inst_17556 = (inst_17555__$1 == null);var inst_17557 = cljs.core.not.call(null,inst_17556);var state_17591__$1 = (function (){var statearr_17595 = state_17591;(statearr_17595[9] = inst_17555__$1);
return statearr_17595;
})();if(inst_17557)
{var statearr_17596_17623 = state_17591__$1;(statearr_17596_17623[1] = 5);
} else
{var statearr_17597_17624 = state_17591__$1;(statearr_17597_17624[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17592 === 5))
{var inst_17555 = (state_17591[9]);var inst_17552 = (state_17591[7]);var inst_17559 = (state_17591[10]);var inst_17559__$1 = f.call(null,inst_17555);var inst_17560 = cljs.core._EQ_.call(null,inst_17559__$1,inst_17552);var inst_17561 = cljs.core.keyword_identical_QMARK_.call(null,inst_17552,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_17562 = (inst_17560) || (inst_17561);var state_17591__$1 = (function (){var statearr_17598 = state_17591;(statearr_17598[10] = inst_17559__$1);
return statearr_17598;
})();if(cljs.core.truth_(inst_17562))
{var statearr_17599_17625 = state_17591__$1;(statearr_17599_17625[1] = 8);
} else
{var statearr_17600_17626 = state_17591__$1;(statearr_17600_17626[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17592 === 6))
{var inst_17551 = (state_17591[8]);var inst_17576 = inst_17551.length;var inst_17577 = (inst_17576 > 0);var state_17591__$1 = state_17591;if(cljs.core.truth_(inst_17577))
{var statearr_17602_17627 = state_17591__$1;(statearr_17602_17627[1] = 12);
} else
{var statearr_17603_17628 = state_17591__$1;(statearr_17603_17628[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17592 === 7))
{var inst_17587 = (state_17591[2]);var state_17591__$1 = state_17591;var statearr_17604_17629 = state_17591__$1;(statearr_17604_17629[2] = inst_17587);
(statearr_17604_17629[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17592 === 8))
{var inst_17555 = (state_17591[9]);var inst_17551 = (state_17591[8]);var inst_17559 = (state_17591[10]);var inst_17564 = inst_17551.push(inst_17555);var tmp17601 = inst_17551;var inst_17551__$1 = tmp17601;var inst_17552 = inst_17559;var state_17591__$1 = (function (){var statearr_17605 = state_17591;(statearr_17605[7] = inst_17552);
(statearr_17605[8] = inst_17551__$1);
(statearr_17605[11] = inst_17564);
return statearr_17605;
})();var statearr_17606_17630 = state_17591__$1;(statearr_17606_17630[2] = null);
(statearr_17606_17630[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17592 === 9))
{var inst_17551 = (state_17591[8]);var inst_17567 = cljs.core.vec.call(null,inst_17551);var state_17591__$1 = state_17591;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17591__$1,11,out,inst_17567);
} else
{if((state_val_17592 === 10))
{var inst_17574 = (state_17591[2]);var state_17591__$1 = state_17591;var statearr_17607_17631 = state_17591__$1;(statearr_17607_17631[2] = inst_17574);
(statearr_17607_17631[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17592 === 11))
{var inst_17555 = (state_17591[9]);var inst_17559 = (state_17591[10]);var inst_17569 = (state_17591[2]);var inst_17570 = (new Array(0));var inst_17571 = inst_17570.push(inst_17555);var inst_17551 = inst_17570;var inst_17552 = inst_17559;var state_17591__$1 = (function (){var statearr_17608 = state_17591;(statearr_17608[12] = inst_17569);
(statearr_17608[7] = inst_17552);
(statearr_17608[8] = inst_17551);
(statearr_17608[13] = inst_17571);
return statearr_17608;
})();var statearr_17609_17632 = state_17591__$1;(statearr_17609_17632[2] = null);
(statearr_17609_17632[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17592 === 12))
{var inst_17551 = (state_17591[8]);var inst_17579 = cljs.core.vec.call(null,inst_17551);var state_17591__$1 = state_17591;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17591__$1,15,out,inst_17579);
} else
{if((state_val_17592 === 13))
{var state_17591__$1 = state_17591;var statearr_17610_17633 = state_17591__$1;(statearr_17610_17633[2] = null);
(statearr_17610_17633[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17592 === 14))
{var inst_17584 = (state_17591[2]);var inst_17585 = cljs.core.async.close_BANG_.call(null,out);var state_17591__$1 = (function (){var statearr_17611 = state_17591;(statearr_17611[14] = inst_17584);
return statearr_17611;
})();var statearr_17612_17634 = state_17591__$1;(statearr_17612_17634[2] = inst_17585);
(statearr_17612_17634[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17592 === 15))
{var inst_17581 = (state_17591[2]);var state_17591__$1 = state_17591;var statearr_17613_17635 = state_17591__$1;(statearr_17613_17635[2] = inst_17581);
(statearr_17613_17635[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5754__auto__){
return (function() {
var state_machine__5755__auto__ = null;
var state_machine__5755__auto____0 = (function (){var statearr_17617 = (new Array(15));(statearr_17617[0] = state_machine__5755__auto__);
(statearr_17617[1] = 1);
return statearr_17617;
});
var state_machine__5755__auto____1 = (function (state_17591){while(true){
var ret_value__5756__auto__ = (function (){try{while(true){
var result__5757__auto__ = switch__5754__auto__.call(null,state_17591);if(cljs.core.keyword_identical_QMARK_.call(null,result__5757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5757__auto__;
}
break;
}
}catch (e17618){if((e17618 instanceof Object))
{var ex__5758__auto__ = e17618;var statearr_17619_17636 = state_17591;(statearr_17619_17636[5] = ex__5758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17591);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17618;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17637 = state_17591;
state_17591 = G__17637;
continue;
}
} else
{return ret_value__5756__auto__;
}
break;
}
});
state_machine__5755__auto__ = function(state_17591){
switch(arguments.length){
case 0:
return state_machine__5755__auto____0.call(this);
case 1:
return state_machine__5755__auto____1.call(this,state_17591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5755__auto____0;
state_machine__5755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5755__auto____1;
return state_machine__5755__auto__;
})()
;})(switch__5754__auto__))
})();var state__5826__auto__ = (function (){var statearr_17620 = f__5825__auto__.call(null);(statearr_17620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5824__auto___17621);
return statearr_17620;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5826__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map