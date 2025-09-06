import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, lastValueFrom, map, Observable, of, Subject } from 'rxjs';
import { Directive, HostListener, inject, Injectable, OnInit } from '@angular/core';

import { Info } from '../../info';
import { Service } from "../../service/service";
import { BaseEntity } from "../../BaseEntity";

import { IHubUI } from './hubUI.interface';
import { IEditUI } from './editUI.interface';
import { IDeleteUI } from './deleteUI.interface';
import { EditUI } from './editUI';
import { DeleteUI } from './deleteUI';
import { NgForm } from '@angular/forms';
import { IService } from '../../service/service.interface';
import { DropdownMenuItem } from '../components/dropdown-menu/dropdown-menu-item.model';
import { LogViewer } from '../components/log-viewer/log-viewer';
import { LogViewerService } from '../components/log-viewer/log-viewer.service';

@Directive()
export class HubUI<T extends BaseEntity> implements IHubUI<T>, OnInit {

    quickAddItems: DropdownMenuItem[] = [];

    linkedEntityItems: DropdownMenuItem[] = [];

    hoveredRowIndex: number = -1;

    router: Router = inject(Router);

    currentInstance: T;
    filterInstance: T;

    list$: Observable<T[]> = new Observable<T[]>();

    private seekSubject = new Subject<void>();

    public logViewerService!: LogViewerService;

    constructor(public service: Service<T>) {

        this.currentInstance = this.service.builder.BuildInstance();
        this.filterInstance = this.service.builder.BuildSeekInstance();
        this.logViewerService = inject(LogViewerService);
    }

    @HostListener('document:keydown', ['$event'])
    onEscapePress(event: KeyboardEvent) {
        // if (event.key === 'Delete') {
        //     this.deleteRecord()
        //     return;
        // }
        if (event.key !== 'Escape') return;

        this.onEditClosed(false);
    }

    ngOnInit(): void {
        this.seekSubject
            .pipe(
                debounceTime(300),         // wait until user stops typing for 300ms
                //distinctUntilChanged()     // ignore consecutive same values
            )
            .subscribe(() => {
                console.log('Filter Instance : ', this.filterInstance);
                this.list$ = this.service.Seek(this.filterInstance);
                this.currentInstance = this.service.builder.BuildInstance();
            });

        this.onRefresh();
    }

    onSeek(): void {
        this.seekSubject.next();
    }

    onSeekByValue(value: string): void {
        this.list$ = this.service.SeekByValue(value);
    }

    onSelect(record: T): void {
        //console.log('onSelect', record);
        this.currentInstance = record;
    }

    onDoubleClick(editUI: EditUI<T>, event?: MouseEvent): void {

        console.log(event?.ctrlKey);
        console.log('Info : ', this.filterInstance.info);
        if (event?.ctrlKey)
            this.editRecord(editUI);
        else
            this.navigateToMaster(this.filterInstance.info);
    }


    addRecord(editUI: EditUI<T>): void {
        editUI?.Show({ ...this.service.builder.BuildInstance() });
    }

    deleteRecord(deleteUI: DeleteUI<T>): void {
        deleteUI.Show({ ...this.currentInstance });
    }

    editRecord(editUI: EditUI<T>, currentRecord?: T): void {
        if (currentRecord)
            this.currentInstance = currentRecord;
        editUI.Show({ ...this.currentInstance });
    }

    onLog(): void {
        throw new Error('Method not implemented.');
    }

    navigateToMaster(info: Info): void {
        this.router.navigate([`${info.url.toLowerCase()}`, this.currentInstance.id]);
    }

    navigateToUrl(url: string): void {
        console.log('Navigate to ', url);
        this.router.navigate([url.toLowerCase()]);
    }




    resetFilter(): void {
        throw new Error("Method not implemented.");
    }

    onRefresh(): void {
        //this.logViewerService.isOpen = !this.logViewerService.isOpen;
        this.filterInstance = this.service.builder.BuildSeekInstance();
        this.onSeek();
        //this.logViewerService.modalVisible = !this.logViewerService.modalVisible;
    }

    onEditClosed(refreshRequired: boolean) {
        if (refreshRequired) {
            this.currentInstance = this.service.builder.BuildInstance();
            this.onRefresh();
        }
    }

    onDeleteClosed(refreshRequired: boolean) {
        if (refreshRequired)
            this.onRefresh();
    }

    setIndex(i: number) {
        this.hoveredRowIndex = i;
    }

    checkIndex(i: number): boolean {
        return this.hoveredRowIndex == i;
    }



}