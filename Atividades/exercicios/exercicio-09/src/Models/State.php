<?php

namespace src\Models;

class State implements ModelInterface{
    private $id, $nome, $sigla;

    public function __construct($id, $nome, $sigla){
        $this->id = $id;
        $this->sigla = $sigla;
        $this->nome = $nome;
    }
    public function getAll() {}
    public function delete($id) {}

}