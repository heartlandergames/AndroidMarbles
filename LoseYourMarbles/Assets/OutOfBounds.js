#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(col : Collider)
{
    if(col.gameObject.tag == "MARBLE")
    {
        Destroy(col.gameObject);
    }
}