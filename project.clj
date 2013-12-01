(defproject snazzy "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/core.async "0.1.256.0-1bf8cf-alpha"] 
                 [org.clojure/clojurescript "0.0-2080"]
                 [clj-http "0.7.7"]
                 ]

  :plugins [[lein-cljsbuild "1.0.0"]]

  :profiles {:dev {:plugins [[com.cemerick/austin "0.1.3"]]
                   :injections [(require 'spyscope.core) (require '[redl core complete])]
                   :dependencies [ [spyscope "0.1.3"]
                                  [redl "0.2.0"] ] 
                   }}

  :source-paths ["src"]

  :cljsbuild { 
    :builds [{:id "snazzy"
              :source-paths ["src"]
              :compiler {
                :output-to "snazzy.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
