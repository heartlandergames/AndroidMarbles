#pragma strict

var manager : Manager;


function Start () {
    manager = GameObject.FindWithTag("MANAGER").GetComponent(Manager);
}

function Update () {

}

function OnTriggerEnter(col : Collider)
{
    if(col.gameObject.tag == "MARBLE")
    {
        
        manager.AddPoint(col.gameObject);
    }
    if(col.gameObject.tag== "SHOOTER")
    {
        Destroy(col.gameObject);
        manager.NextTurn();
    }
}
